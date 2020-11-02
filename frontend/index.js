const {spawn, execSync} = require('child_process');
const assetsConfig = require("./assets.config");

module.exports = {
    assetsConfig,
    buildDev: () => execSync('npm run build:dev', {cwd: __dirname, stdio: "inherit"}),
    buildProd: () => execSync('npm run build:prod', {cwd: __dirname, stdio: "inherit"}),
    buildWatch: () => spawn('npm', ["run", "build:watch"], {cwd: __dirname, stdio: "inherit"})
}