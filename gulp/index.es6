const gulp = require('gulp')
const runSequence = require('run-sequence')
const wrench = require('wrench');
const minimist = require('minimist')
const args = minimist(process.argv.slice(2))
const path = require('path')

const SRC_PATH = path.resolve(path.join("src"))
const DEST_PATH = path.resolve(path.join("dist"))

const awsSetting = {
  region: 'ap-northeast-1',
  accessKeyId: args.accessKeyId,
  secretAccessKey: args.secretAccessKey
}

const lambdaSetting = {
  region: 'ap-northeast-1',
  handler: 'index.handler',
  role: 'arn:aws:iam::569130971469:role/lambda_basic_execution',
  functionName: 'gulpSample',
  timeout: 10,
  memorySize: 256
  // eventSource: {
  //   EventSourceArn: <event source such as kinesis ARN>,
  //   BatchSize: 200,
  //   StartingPosition: "TRIM_HORIZON"
  // }
}

const bigquerySetting = Object.assign({ project_id: args.projectId },
  require(path.resolve(path.join("keyFile.json"))))

const options = {
  setting: {
    lambdaSetting,
    awsSetting,
    bigquerySetting
  },
  path: {
    src: {
      path: SRC_PATH,
      scripts: `${SRC_PATH}`
    },
    dest: {
      path: DEST_PATH,
      scripts: `${DEST_PATH}`
    },
  }
}

wrench.readdirSyncRecursive(path.resolve(path.join('gulp', 'tasks'))).filter((file)=> {
  return (/\.es6$/i).test(file)
}).map(function(file) {
  require(path.resolve(path.join('gulp', 'tasks', file)))(options)
})

gulp.task('default', (done)=> {
  runSequence(
    'clean',
    'eslint',
    'babel',
    'preprocess',
    'module-install',
    'packaging',
    'deploy'
  )
})
