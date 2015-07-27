const gulp = require('gulp')
const eslint = require('gulp-eslint')

module.exports = (options)=> {
  gulp.task('eslint', ()=> {
    return gulp.src(`${options.path.src.scripts}/**/*.es6`)
      .pipe(eslint({ useEslintrc: true }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .pipe(gulp.dest('../output'))
  })
}
