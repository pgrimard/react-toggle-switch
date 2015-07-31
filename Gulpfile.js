var gulp = require('gulp');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var argv = require('yargs').argv;

var production = (process.env.NODE_ENV === 'production' || argv.production);

gulp.task('default', ['scripts', 'styles'], function() {});

gulp.task('styles', function() {
  return gulp.src('./css/switch.css')
    .pipe(minifyCss())
    .pipe(rename('switch.min.css'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', function() {
  var b = browserify({debug: !production})
    .require('./src/switch.js', {entry: true})
    .transform(babelify);

  getNPMPackageIds().forEach(function(id) {
    b.external(id);
  });

  return bundle('switch.js', b);
});

function bundle(name, b) {
  return b.bundle().pipe(source(name))
    .pipe(streamify(uglify()))
    .pipe(rename(name.substring(0, name.lastIndexOf('.js')) + '.min.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/scripts'));
}

function getNPMPackageIds() {
  // read package.json and get dependencies' package ids
  var packageManifest = {};
  try {
    packageManifest = require('./package.json');
  } catch (e) {
    // does not have a package.json manifest
  }
  return Object.keys(packageManifest.dependencies) || [];
}