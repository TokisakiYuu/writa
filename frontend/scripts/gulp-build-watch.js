const path = require("path");
const {series, parallel, watch} = require("gulp");
const {
  styles,
  scripts,
  resource,
  template
} = require("./gulp-build-dev");

const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

// assets.config
const assetsConfig = require("../assets.config");
const context = assetsConfig.context;

// Webpack 监听模式启动
function webpackWatch() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig)
      .watch({}, (err, stats) => {
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

/**
 * @todo 这边watch路径改成assets配置
 */
// gulp 监听变动
function startWatch() {
  watch(`${context}/styles/`, styles);
  watch(`${context}/resource/`, resource);
  watch(`${context}/pages/`, template);
}

module.exports = {
  build: parallel(
    startWatch,
    series(
      template,
      styles,
      resource,
      webpackWatch
    )
  )
}
