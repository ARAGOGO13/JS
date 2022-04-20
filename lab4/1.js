/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
let Sort = (word) => word.toLowerCase().split('').sort().join('');

function getAnagramms(arr) {
    let lettersOfAnagramms = [];
    for (el of arr) {
        if (lettersOfAnagramms.indexOf(Sort(el)) === -1) lettersOfAnagramms.push(Sort(el));
    }
    let anagramms = [];
    for (let i = 0; i < lettersOfAnagramms.length; i++) {
        tmp = [];
        for (let j = 0; j < arr.length; j++) {
            if (lettersOfAnagramms[i] == Sort(arr[j])) tmp.push(arr[j]);
        }
        anagramms.push(tmp);
    }
    return anagramms;
}


module.exports = getAnagramms;