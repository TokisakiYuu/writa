
const { resolve } = require("path");
const startupMode = process.env.NODE_ENV || "production";

/**
 * 初始化全局变量
 * YUULOG对象从这里开始所有模块可直接访问
 */
global.YUULOG = {
  root: resolve(__dirname, "./"),
  mode: startupMode,
  templatesDir: resolve(__dirname, "./templates"),
  resourcesDir: resolve(__dirname, "./resources")
};


const startApp = require("./app");
const webpackCompiler = require('webpack');
const webpackConfig   = require('./webpack.config.js');


/**
 * 编译和打包
 * 如果以开发模式启动就去启动gulp，它会监听文件变动自动去运行webpack
 * 如果以生产模式启动就执行一次webpack编译打包
 * 也就是说文件变动是通过gulp做的，webpack是被gulp用webpack node API调用的
 */
if(startupMode === "development") {
  require("gulp/bin/gulp");
}else if(startupMode === "production") {
  webpackCompiler({...webpackConfig, mode: "production"})
    .run((err, stats) => {
        if (err) throw err;
        if (stats.hasErrors() || stats.hasWarnings()) {
            console.log(stats.toString());
        }
    })
}


// 启动服务。在这之后http请求将到达程序中
startApp();