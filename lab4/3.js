/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let newStr = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (count == 1) {
            newStr += str[i];
        }
        if (str.indexOf(str[i], i + 1) != i + 1) {
            if (count != 1) {
                newStr += count;
            }
            count = 1;
        } else {
            count++;
        }
    }
    return newStr;
}

module.exports = rle;