'use strict';
const gulp = require('gulp'),
      sass = require('gulp-sass')(require('sass')),
      browserSync = require('browser-sync');


// gulp.task('sass', function(){
//     return gulp.src('sass/**/.sass','sass/**/.scss,')
//     .pipe(sass({outputStyle: 'extended'}).on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });

// gulp.task('watch', function(){
//     gulp.watch('sass/**/.sass','sass/**/.scss,','sass');
// });

// gulp.task('default', gulp.series('sass'));

function buildStyles() {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  };

  function devServer(cb) {
    const params = {
      watch: true,
      reloadDebounce: 150,
      notify: false,
      server: { baseDir: './' },
    };
  
    browserSync.create().init(params);
    cb();
  }
  
  // exports.buildStyles = buildStyles;
  function watchFiles () {
    gulp.watch('./sass/**/*.scss', buildStyles);
  };

  exports.default = gulp.series(buildStyles,devServer,watchFiles)
