var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("default", function () {
  return gulp.src("src/scripts/common.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("common.js"))
    .pipe(sourcemaps.write())               // write 不传参数是内联，否则传入路径
    .pipe(gulp.dest("dist"));
});