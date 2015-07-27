const gulp = require('gulp')
const awsLambda = require('node-aws-lambda')
const AWS = require('aws-sdk')

module.exports = (options)=> {
  gulp.task('deploy', ()=> {
    AWS.config.update(
      {
        accessKeyId: 'AKIAJEY3UQMB7IESNG5Q',
        secretAccessKey: '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',
        region: 'ap-northeast-1'
      }
    )
    const lambda = new AWS.Lambda()
    return awsLambda.deploy(`${options.path.dest.path}/dist.zip`,
      options.setting.lambdaSetting, null, null, lambda)
  })
}
