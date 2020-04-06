let { readdirSync } = require("fs");

/**
 * 获取文件列表，排除隐藏文件和index
 */
function fileList(path) {
    let list = readdirSync(path);
    return list.filter(name => {
        return !(
            name.startsWith(".")
            || name === "index.js"
            || name === "."
            || name === ".."
        );
    })
}

/**
 * 去掉文件拓展名
 */
function ridExtname(fileName) {
    let splited = fileName.split(".");
    if(splited.length == 1) {
        return splited[0];
    }
    splited.pop();
    return splited.join(".");
}

module.exports = function(dirname) {
    let list = fileList(dirname);
    let modules = Object.create(null);
    list.forEach(name => {
        let moduleName = ridExtname(name);
        modules[moduleName] = require(`${dirname}/${name}`);
    });
    return modules;
}