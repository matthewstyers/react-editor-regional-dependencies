const gulp = require('gulp');
const install = require('gulp-install');

gulp.task('install', () => {
  gulp.src('./package.json')
    .pipe(gulp.dest('../'))
    .pipe(install({
      production: true
    // add any additional install options (usingCamelCase) here
    }));
});

gulp.task('default', ['install']);
