const path = require("path");
const {src, dest} = require("gulp");
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const ts = require('gulp-typescript');
const rollup = require('gulp-rollup');
const sourcemaps = require('gulp-sourcemaps');

const distDir = path.resolve(__dirname, "./dist");
const tsProject = ts.createProject('tsconfig.json');

// 编译CSS代码
function styles() {
    return src("./src/styles/*.less")
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [new LessAutoprefix({ browsers: ['last 2 versions'] })]
        }))
        .pipe(sourcemaps.write())
        .pipe(dest(`${distDir}/css/`));
}

// 编译TypeScript代码
// function scripts() {
//     return src("./src/scripts/**/*.ts")
//         .pipe(rollup())
//         .pipe(dest(`${distDir}/js/`));
// }

exports.default = scripts;