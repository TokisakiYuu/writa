const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    // mode: "production",    // 生产模式
    mode: "development",   // 开发模式

    entry: {
        "/js/common": "./src/scripts/common.ts"
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        // filename: "[name].[fullhash].js",
        filename: "[name].js",
        libraryTarget: "umd",
        library: "MyLib",
        umdNamedDefine: true
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.less$/,
                use: [
                    {loader: "less-loader"},
                    {loader: "postcss-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    },

    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             sourceMap: true,
    //             parallel: true,
    //         }),
    //     ]
    // },

    devtool: "source-map",

    // 搜寻模块的规则
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
    // // 源码变动监听
    // watch: true
}