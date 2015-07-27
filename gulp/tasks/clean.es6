const gulp = require('gulp')
const rimraf = require('gulp-rimraf')

module.exports = (options)=> {
  gulp.task('clean', ()=> {
    return gulp.src(options.path.dest.path).pipe(rimraf({force: true}))
  })
}
