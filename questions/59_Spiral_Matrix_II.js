/*
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let arr = [];
    for(let i=0;i<n;i++){
        let subArr = [];
        for(let j=0;j<n;j++){
            subArr.push(0);
        }
        arr.push(subArr);
    }
    let c = 1, j = 0;
    while(c <= n * n){
        for (let i = j; i < n - j; i++)
            arr[j][i] = c++;
        for (let i = j + 1; i < n - j; i++)
            arr[i][n - j - 1] = c++;
        for (let i = n - j - 2; i >= j; i--)
            arr[n - j - 1][i] = c++;
        for (let i = n -j - 2; i > j; i--)
            arr[i][j] = c++;
        j++;
    }
    return arr;
};