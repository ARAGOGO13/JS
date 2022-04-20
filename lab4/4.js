/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    let flag = false;
    while (flag == false) {
        let outArr = [];
        flag = true;
        for (let i = 0; i < arr.length; i++) {
            if (typeof(arr[i]) == "object") {
                flag = false;
                let new_arr = arr[i];
                for (el of new_arr) {
                    outArr.push(el);
                }
            } else {
                outArr.push(arr[i]);
            }
        }
        arr = outArr;
    }
    return arr;
}

console.log(get1DArray([1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]));

module.exports = get1DArray;