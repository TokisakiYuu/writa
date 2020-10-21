const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const ts = require('gulp-typescript');

gulp.task("default", function () {
  return gulp.src("src/scripts/*.ts")
    .pipe(sourcemaps.init())
    .pipe(ts({
      target: "ES6",
      allowJs: true,
      checkJs: true,
      alwaysStrict: true
    }))
    .pipe(sourcemaps.write("sourcemap"))               // write 不传参数是内联，否则传入路径
    .pipe(gulp.dest("dist"));
});