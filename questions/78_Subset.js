/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    var len = nums.length;
    var result = [[]];
    for (let i = 0; i < len; i++) {
        result.map(x => {
            let tmp = x.concat(nums[i]);
            result.push(tmp);
        });
    }
    return result;
};