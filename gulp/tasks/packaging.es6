const gulp = require('gulp')
const zip = require('gulp-zip')

module.exports = (options)=> {
  gulp.task('packaging', ()=> {
    return gulp.src([`${options.path.dest.path}/**/*`, `!${options.path.dest.path}/package.json`])
      .pipe(zip('dist.zip'))
      .pipe(gulp.dest(options.path.dest.path))
  })
}
