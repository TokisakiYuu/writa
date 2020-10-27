const path = require('path');
 
module.exports = {
    mode: "development",   // 开发模式
    context: __dirname,
    entry: {
        common: "/src/scripts/common.ts"
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [
                {loader: 'awesome-typescript-loader'}
            ]
        }]
    },
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "[name].js",
        publicPath: "/",
        library: "YuuLog",
        libraryTarget: "umd"
    },

    devtool: "inline-source-map",

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
}