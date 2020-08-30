/**
 * 文字处理
 * @author tokisakiyuu
 */

/**
 * 数字补零
 * @param {string} num - 数字
 * @param {number} length - 位数
 */
function fillZero(num, length) {
    if(typeof num !== "string") {
        console.warn("fillZero的第一个参数必须是字符串");
        return num
    };
    let len = num.length;
    if(len >= length) return num;
    return repeat("0", length - len) + num;
}

exports.fillZero = fillZero;

/**
 * 把一串字符串重复n次组成一个新的字符串
 * @param {string} str - 目标字符串
 * @param {number} num - 要重复的次数
 */
function repeat(str, num) {
    if(num == 0) return "";
    return str + repeat(str, num - 1);
}

exports.repeat = repeat;

/**
 * 格式化时间
 * @param {Date} date - 日期对象
 */
function dateFormat(date) {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDay()}日 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

exports.dateFormat = dateFormat;