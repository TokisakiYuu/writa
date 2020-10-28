const path = require("path");
const {src, dest, series} = require("gulp");
const less = require('gulp-less');
const minifyCSS = require('gulp-minify-css');
const LessAutoprefix = require('less-plugin-autoprefix');
const pug = require('../lib/gulp-pug-umd');

// Webpack
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

// assets.config
const assetsConfig = require("../assets.config");
const context = assetsConfig.context;

const distDir = path.resolve(__dirname, "../dist");

// 编译CSS代码
function styles() {
  return src(assetsConfig.css.map(path => `${context}/${path}`))
    .pipe(less({
      plugins: [new LessAutoprefix({ browsers: ['last 2 versions'] })]
    }))
    .pipe(minifyCSS())
    .pipe(dest(`${distDir}/css/`))
}

// 编译TypeScript代码
function scripts() {
    return new Promise((resolve, reject) => {
        webpack({
            ...webpackConfig,
            mode: "production",
            devtool: false
        })
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

// 移动资源
function resource() {
    return src(assetsConfig.resource.map(path => `${context}/${path}`))
        .pipe(dest(`${distDir}/resource/`));
}

// 编译PUG
function template() {
    return src(assetsConfig.template.map(path => `${context}/${path}`))
        .pipe(pug({client: true}))
        .pipe(dest(`${distDir}/template/`));
}


module.exports = {
    styles,
    scripts,
    resource,
    template,
    build: series(template, styles, resource, scripts)
}