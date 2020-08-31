const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: "development",    // 开发模式

    entry: {
        article: ["./frontend/css/article.less", "./frontend/scripts/article.js"]
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: "/",
        library: "您有一份新的源码请注意查收",
        libraryTarget: "umd"
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader", "less-loader"]
                })
            },
            {
                test: /\.css$/,
                use: ["css-loader", "postcss-loader"]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/transform-runtime']
                  }
                }
            }
        ]
    },

    plugins:[
        new ExtractTextPlugin("styles/[name].css")
    ],

    // source map
    devtool: "inline-source-map",

    // 搜寻模块的规则
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js' // 加载vue compiler版源码供浏览器使用
        }
    }

    // // 源码变动监听
    // watch: true
}