/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var result = []
    for (var i = 1; i <= numRows; i++) {
        if (i == 1) result.push([1]);
        else if (i == 2) result.push([1, 1]);
        else {
            var preArr = result[result.length - 1];
            var arr = new Array(i);
            arr[0] = 1;
            for (var j = 0; j < i - 2; j++) {
                arr[j + 1] = preArr[j] + preArr[j + 1];
            }
            arr[i - 1] = 1;
            result.push(arr);
        }
    }
    return result;
};