const webpackStats = require("../dist/webpack-stats.json");
// const commonScriptName = webpackStats.assetsByChunkName.common[1];
// const html = require("../dist/" + commonScriptName);
webpackStats.modules.forEach(module => {
    if(!module.assets.length) return;
    console.log(`${module.name}  =>  ${module.assets}`);
})