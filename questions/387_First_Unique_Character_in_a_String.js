/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var obj = {};
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }
    }
    for (let i in obj) {
        if (obj[i] == 1) {
            return s.indexOf(i);
        }
    }
    return -1;
};