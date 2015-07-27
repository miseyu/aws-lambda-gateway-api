const gulp = require('gulp');
const babel = require('gulp-babel');

module.exports = (options)=> {
  gulp.task('babel', ()=> {
    return gulp.src(`${options.path.src.scripts}/**/*.es6`)
      .pipe(babel())
      .pipe(gulp.dest(options.path.dest.path))
  })
}
