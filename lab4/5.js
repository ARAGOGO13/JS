/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    let stack = [];
    for (el of str) {
        if (el === "(" || el === "[" || el === "<") stack.push(el);
        else if ((el === ")" || el === "]" || el === ">")) {
            const first = stack.pop();
            if (first + el != "[]" && first + el != "()" && first + el != "<>") return false;
        } else return false;
    }
    if (stack.length === 0) return true;
    else return false;
}
console.log(checkBrackets("[(<>)]"))
module.exports = checkBrackets;