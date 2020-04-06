const { watch, 
        series,             // 组合任务(顺序执行)
        parallel,           // 组合任务(并发执行)
    } = require('gulp');
const webpackCompiler = require('webpack');
const webpackConfig   = require('./webpack.config.js');

//  webpack打包
function doPackage(cb) {
    cb = cb || function(){};
    webpackCompiler(webpackConfig)
        .run((err, stats) => {
            if (err) return cb(err);
            if (stats.hasErrors() || stats.hasWarnings()) {
                console.log(stats.toString());
            }
            return cb();
        })
}

// 监听文件变化
watch(['./src/**'], doPackage);

exports.default = series(
    doPackage
);