const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

const compiler = webpack(webpackConfig);

const watching = compiler.watch(
    {}, 
    (err, stats) => {
        if(err) {
            return console.error(err);
        }

        const info = stats.toJson();

        if(stats.hasErrors()) {
            console.error(info.errors);
        }
        if (stats.hasWarnings()) {
            console.warn(info.warnings);
        }

        // console.log(info.assetsByChunkName);

        console.log(stats.toString({
            chunks: false,  // Makes the build much quieter
            colors: true    // Shows colors in the console
        }));
    }
);