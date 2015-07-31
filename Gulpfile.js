var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

gulp.task('default', ['scripts', 'styles'], function() {});

gulp.task('styles', function() {
  return gulp.src('./src/css/switch.css')
    .pipe(minifyCss())
    .pipe(rename('switch.min.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', function() {
  gulp.src('./src/scripts/switch.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist/scripts'));

  return gulp.src('./src/scripts/switch.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename('switch.min.js'))
    .pipe(gulp.dest('./dist/scripts'));
});