var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/**/*.css'))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('./index.html', browserSync.reload);
  gulp.watch('scss/**/*scss', ['sass']);
  gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch', 'browserSync']);