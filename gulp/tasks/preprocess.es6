const gulp = require('gulp');
const preprocess = require('gulp-preprocess');

module.exports = (options)=> {
  gulp.task('preprocess', ()=> {
    return gulp.src(`${options.path.dest.path}/index.js`)
      .pipe(preprocess(
        {
          context: {
            PROJECT_ID: options.setting.bigquerySetting.project_id,
            PRIVATE_KEY_ID: options.setting.bigquerySetting.private_key_id,
            PRIVATE_KEY: options.setting.bigquerySetting.private_key,
            CLIENT_EMAIL: options.setting.bigquerySetting.client_email,
            CLIENT_ID: options.setting.bigquerySetting.client_id
          }
        }
      ))
      .pipe(gulp.dest(options.path.dest.path))
  })
}
