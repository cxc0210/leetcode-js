/*
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Example 1:

Input: 11
Output: 3
Explanation: Integer 11 has binary representation 00000000000000000000000000001011 
Example 2:

Input: 128
Output: 1
Explanation: Integer 128 has binary representation 00000000000000000000000010000000
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    var a = n;
    var array = Array.from(n.toString(2));
    var result = 0;
    array.map(x => {
        if (x == "1") {
            result++
        }
    });
    return result;
};