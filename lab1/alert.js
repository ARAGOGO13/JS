// Задание 1
function capitalize(str) {
    let flag = 1;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === ' ') {
            flag = 1;
        }
        if (flag === 1 && str[i] != ' ') {
            str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
            flag = 0;
        }
    }
    return str;
}
console.log(capitalize("hello world"));


//Задание 2
function getMinMax(str){
    let strWithoutChars = str.replace(/[^-\d]/g, ' ');
    let arr = strWithoutChars.split(' ');

    arr = arr.filter(function (el){
        return (el != null && el != "" || el === 0);
    });

    for (let i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i])
    }
    mx = Math.max.apply(Math, arr);
    mn = Math.min.apply(Math, arr);
    return "min:"+ mn+", max:"+mx;
}
str = "'4 и -6, 2, 1, может 9, 63, -134 и 566]";
let a = getMinMax(str);
console.log(a);

//Задание 3
function multiplyArray(arr, n){ 
    for (let i = 0; i < arr.length; i++){
        if (Number.isInteger(arr[i])) arr[i] *= n;
    }
    return arr;
}
let arr = [1, 2, 3, 'ddd', {min: 1}, 22, false];
let k = 2;
console.log(multiplyArray(arr, k));

//Задание 4
function prettySum(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            count += arr[i] * arr[arr.length - 1];
        }
    }
    return count;
}
let array = [3, 2, 6, 5, 4, 1, 2];
console.log(prettySum(array));