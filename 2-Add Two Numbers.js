/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
  You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var isNotNull = function(o) { return o !== null };
    var carry = 0;
    var res = new ListNode(0);
    var cur = res;
    
    while ( isNotNull(l1) && isNotNull(l2) )
    {
        var tmp = new ListNode(l1.val + l2.val + carry);
        cur.next = tmp;
        if ( tmp.val >=10 ){
            tmp.val-= 10;
            carry = 1;
        }else
            carry = 0;
        cur = tmp;
		l1 = l1.next;
		l2 = l2.next;
    }
    
    var p = isNotNull(l1) ? l1 : l2;
    if ( p === null)
    {
        if ( carry === 1 )
            cur.next = new ListNode(1);
    }
    else
    {
        while( isNotNull(p) )
		{
			tmp = new ListNode(p.val + carry);
			cur.next = tmp;
			if ( tmp.val >= 10 )
			{
				tmp.val -= 10;
				carry = 1;
			}
			else
				carry = 0;
			cur = tmp;
			p = p.next;
		}
		if ( carry === 1 )
			cur.next = new ListNode(1);
    }
    return res.next;
}