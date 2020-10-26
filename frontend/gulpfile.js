const path = require("path");
const {src, dest, lastRun, series, watch} = require("gulp");
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const sourcemaps = require('gulp-sourcemaps');

// Webpack
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const distDir = path.resolve(__dirname, "./dist");

// 编译CSS代码
function styles() {
    return src("./src/styles/*.less", {since: lastRun(styles)})
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [new LessAutoprefix({ browsers: ['last 2 versions'] })]
        }))
        .pipe(sourcemaps.write())
        .pipe(dest(`${distDir}/css/`));
}

// 编译TypeScript代码
function scripts() {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig)
            .run((err, stats) => {
                if(err) {
                    return reject(err);
                }
                const info = stats.toJson();
                if(stats.hasErrors()) {
                    return reject(info.errors);
                }
                if (stats.hasWarnings()) {
                    console.warn(info.warnings);
                }
                console.log(stats.toString({
                    chunks: false,  // Makes the build much quieter
                    colors: true    // Shows colors in the console
                }));
                return resolve();
            });
    });
}

exports.default = series(scripts, styles);