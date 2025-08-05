const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

// Path
const paths = {
  scss: 'assets/css/style.scss',
  dest: 'assets/css/'
};

// Compile SCSS
gulp.task('style', function () {
  return gulp.src(paths.scss)
    .pipe(sass({
      includePaths: ['_sass']
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.dest))
    .pipe(cleanCSS())
    .pipe(dest('assets/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.dest));
});


// Default
gulp.task('default', gulp.series('style'));
