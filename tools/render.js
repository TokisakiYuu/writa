const pug = require('pug');
const pugDir = YUULOG.templatesDir;
const isProductionMode = YUULOG.mode === "production";

/**
 * pug编译器配置项
 * basedir: pug内引用和继承时的基础路径
 * cache: 缓存编译结果，不开启的话每次请求都会重新编译，便于看效果
 */
const pugOptions = {
    basedir: pugDir,
    cache: isProductionMode
}

/**
 * 编译pug
 * @param {string} path - 文件路径
 * @param {string} basedir - pug内引用文件的基础路径
 */
function compilePugFile(path) {
    return pug.compileFile(path, pugOptions);
}


/**
 * pug渲染成html
 * @param {string} sign - 以frontend文件夹为根目录，省略后缀的pug文件路径
 * @param {Object} data - 模版中的变量
 */
function renderHTML(sign, data) {
    let path = `${pugDir}/${sign}.pug`;
    let templeteFn = compilePugFile(path);
    return templeteFn({
        ...data,
        tools: {
            ...require("./string")
        }
    });
}

module.exports = renderHTML;