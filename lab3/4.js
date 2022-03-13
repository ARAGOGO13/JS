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
module.exports = prettySum;