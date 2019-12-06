const gulp = require("gulp");
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
const browserSync = require('browser-sync').create();

gulp.task("default", function() {
  console.log('Hello world');
});

exports.default = () => (
  gulp.src('src/css/style.css')
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(gulp.dest('dest'))
);

gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dest'));
});

exports.default = () => (
  gulp.src('src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dest'))
);

gulp.task('default', () =>
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dest'))
);

gulp.task('scripts', function() {
  return gulp.src('src/js/app.js', 'src/js/engine.js', 'src/js/resources.js')
    .pipe(concat({ path: 'main.js', stat: { mode: 0666 }}))
    .pipe(gulp.dest('./dest/'));
});

gulp.task('compress', function () {
  return pipeline(
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dest')
  );
});

gulp.task('copy', function () {
  gulp.src('./index.html')
      .pipe(gulp.dest('./dest/'));
});

gulp.task("default", ["styles"], function() {
  gulp.watch("src/**/*", ["styles"]);

  browserSync.init({
    server: "./"
  });
});

gulp.task("styles", function() {
  gulp
    .src("src/**/*")
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./dest"))
    .pipe(browserSync.stream());
});