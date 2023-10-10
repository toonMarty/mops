/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var myFilter = function(arr, fn) {
    // create a new array to store items for which
    // fn is truthy
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArray.push(arr[i]);
        }
    }
    return newArray;

};