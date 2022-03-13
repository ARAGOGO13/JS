function multiplyArray(arr, n){ 
    for (let i = 0; i < arr.length; i++){
        if (Number.isInteger(arr[i])) arr[i] *= n;
    }
    return arr;
}
let arr = [1, 2, 3, 'ddd', {min: 1}, 22, false];
let k = 2;
module.exports = multiplyArray;