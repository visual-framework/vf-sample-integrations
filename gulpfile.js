const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const markdown    = require('gulp-markdown');
const inject      = require('gulp-inject-string');

gulp.task('markdown', () =>
  gulp.src('README.md')
      .pipe(inject.append('\n<link rel="stylesheet" media="all" href="https://dev.assets.emblstatic.net/vf/css/styles.css">'))
      .pipe(markdown())
      .pipe(gulp.dest('./'))
);

// Static Server + watching scss/html files
gulp.task('serve', function() {
  browserSync.init({
    server: "./",
    startPath: 'README.html'
  });
  gulp.watch("samples/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('markdown','serve'));
