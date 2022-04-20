/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    let str2 = str.toLowerCase().split('').reverse().join('');
    if (str2 != str) return false;
    return true;
}


module.exports = isPalindrome;