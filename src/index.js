module.exports = function reverse(n) {
    let strNum = String(n).split('').reverse().join('');
    if (strNum[strNum.length - 1] === '-') {
        strNum = strNum.substring(0, strNum.length - 1);
    }
    return Number(strNum);
}

