const gulp = require('gulp')
const awsLambda = require('node-aws-lambda')
const AWS = require('aws-sdk')

module.exports = (options)=> {
  gulp.task('deploy', ()=> {
    AWS.config.update(options.setting.awsSetting)
    const lambda = new AWS.Lambda()
    return awsLambda.deploy(`${options.path.dest.path}/dist.zip`,
      options.setting.lambdaSetting, ()=> {}, null, lambda)
  })
}
