const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

webpack(webpackConfig)
    .run((err, stats) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stats.toString({
            chunks: false,  // Makes the build much quieter
            colors: true    // Shows colors in the console
        }));
    });