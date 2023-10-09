/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = fn(init, nums[0]);

    if (!nums.length) {
        return init;
    }

    for (let i = 1; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    return val;
}
