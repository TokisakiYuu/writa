const fs = require("fs");
const path = require("path");
const {src, dest, series, watch} = require("gulp");
const less = require('gulp-less');
const minifyCSS = require('gulp-minify-css');
const LessAutoprefix = require('less-plugin-autoprefix');
const sourcemaps = require('gulp-sourcemaps');
const pug = require('./lib/gulp-pug-umd');

const noop = () => {};

// 是否是监听模式
const isWatchMode = process.argv.pop() === "--watch";
const isProductionMode = !isWatchMode;

// Webpack
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const distDir = path.resolve(__dirname, "./dist");

// 编译CSS代码
function styles() {
    function styles() {
        let stream = src("./src/styles/*.less");
        if(!isProductionMode) {
            stream = stream.pipe(sourcemaps.init());
        }
        stream = stream
            .pipe(less({
                plugins: [new LessAutoprefix({ browsers: ['last 2 versions'] })]
            }))
            .pipe(minifyCSS());
        if(!isProductionMode) {
            stream = stream.pipe(sourcemaps.write());
        }
        return stream.pipe(dest(`${distDir}/css/`));
    }
    if(isWatchMode) {
        watch(["./src/styles/*.less"], styles);
    }
    return styles();
}

// 编译TypeScript代码
function scripts() {
    const completeCallbackChunk = (resolve, reject) => {
        return (err, stats) => {
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
        }
    }
    
    if(isWatchMode) {
        const compiler = webpack(webpackConfig);
        compiler.watch(
            {},
            completeCallbackChunk(noop, err => console.error(err))
        );
        return Promise.resolve();
    } else {
        const compiler = webpack({
            ...webpackConfig,
            mode: "production",
            devtool: false
        });
        return new Promise((resolve, reject) => {
            compiler.run(completeCallbackChunk(resolve, reject));
        });
    }
}

// 移动资源
function resource() {
    function resource() {
        return src(["./src/resource/**/*"])
            .pipe(dest(`${distDir}/resource/`));
    }
    if(isWatchMode) {
        watch(["./src/resource/**/*"], resource);
    }
    return resource();
}

// 编译PUG
function template() {
    function template() {
        return src(["./src/pages/**/*.pug"])
            .pipe(pug({client: true}))
            .pipe(dest(`${distDir}/pages/`));
    }
    if(isWatchMode) {
        watch(["./src/pages/**/*.pug"], template);
    }
    return template();
}


module.exports = {
    styles,
    scripts,
    resource,
    template,
    build: series(scripts, template, styles, resource)
}