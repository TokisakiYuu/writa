const {basename, extname} = require('path');
const {context, distDir, js} = require("./assets.config.js");
 
module.exports = {
    mode: "development",   // 开发模式
    context: context,
    entry: () => {
        let modules = {};
        js.files.map(entry => modules[basename(entry, extname(entry))] = entry);
        return modules;
    },
    output: {
        path: distDir + "/js",
        filename: "[name].js",
        publicPath: "/",
        library: "YuuTypescriptWebStarter",
        libraryTarget: "umd"
    },
    devtool: "inline-source-map",
    
    module: {
        rules: [{
            test: /\.(ts|tsx|js|jsx)$/,
            loader: 'awesome-typescript-loader',
            options: {
                useCache: true,
                forceIsolatedModules: true,
                reportFiles: [
                    "src/**/*.{ts,tsx,js,jsx}"
                ]
            }
        },{
            test: /\.pug$/,
            loader: 'pug-loader'
        },{
            test: /\.less$/,
            use: [
                {loader: "styletext-loader", options: {esModule: false}},
                "css-loader",
                "less-loader"
            ]
        }]
    },

    plugins: [],

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
}