const MetaInfoPlugin = require('./plugins/MetaInfoPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // mode: "production",    // 生产模式
    mode: "development",   // 开发模式

    entry: {
        "common": __dirname + "/src/scripts/common.ts",
    },

    output: {
        path: __dirname + "/dist",
        filename: "[name].[chunkhash:8].js",
        chunkFilename: "[name].[ext]",
        libraryTarget: "umd",
        library: "YuuLog",
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
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: "css-loader", options: {
                        sourceMap: true
                    }},
                    {loader: "postcss-loader", options: {
                        sourceMap: true
                    }},
                    {loader: "less-loader", options: {
                        sourceMap: true
                    }}
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    {loader: 'file-loader', options: {
                        name: "[name].pug",
                        outputPath: "template/"
                    }}
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {loader: 'file-loader', options: {
                        name: "[name].[hash:8].[ext]",
                        outputPath: "assets/"
                    }}
                ]
            }
        ]
    },

    plugins: [
        new MetaInfoPlugin({
            filename: 'dist/webpack-stats.json'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css'
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: '**/*.pug',
        //             to: '[name].templete.js',
        //             transform(content) {
        //                 return pug.compileClient(content);
        //             },
        //             cacheTransform: true
        //         }
        //     ]
        // })
    ],

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