const gulp = require("gulp");
const autoprefixer = require('gulp-autoprefixer');

gulp.task("default", function() {
  console.log('Hello world');
});

exports.default = () => (
  gulp.src('src/app.css')
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(gulp.dest('dist'))
);