/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var c1 = l1, c2 = l2, c3, l3, carry = 0;

    while (c1 || c2 || carry) {
        var v1 = 0, v2 = 0;

        if (c1) {
            //根据前文给出的代码结构val、next
            v1 = c1.val;
            c1 = c1.next;
        }

        if (c2) {
            v2 = c2.val;
            c2 = c2.next;
        }

        var sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);//得到进位

        if (!c3) {
            l3 = new ListNode(sum % 10);
            c3 = l3;
        } else {
            c3.next = new ListNode(sum % 10);
            c3 = c3.next;
        }
    }
    return l3;
};