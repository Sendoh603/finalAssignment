const gulp = require("gulp");
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');

gulp.task("default", function() {
  console.log('Hello world');
});

exports.default = () => (
  gulp.src('src/css/style.css')
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(gulp.dest('dist'))
);

gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

exports.default = () => (
  gulp.src('src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
);

gulp.task('default', () =>
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
);