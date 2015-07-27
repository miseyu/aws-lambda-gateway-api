const gulp = require('gulp')
const install = require('gulp-install')

module.exports = (options)=> {
  gulp.task('module-install', ()=> {
    return gulp.src(`./package.json`)
      .pipe(gulp.dest(options.path.dest.path))
      .pipe(install({ production: true }))
  })
}
