/**
 * @param {string} s
 * @return {number}
 *  Given a string, find the length of the longest substring without repeating characters. 
    For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. 
 *  For "bbbbb" the longest substring is "b", with the length of 1.
 */
var lengthOfLongestSubstring = function(s) {
    var hash = {};
    var maxlen=0;
    var leftbound = 0;
    for ( var i = 0; i < s.length; i++)
    {
    if ( hash[s[i]] === undefined )
            hash[s[i]] = i;
        else
        {
            var l = i - leftbound;
            if ( l > maxlen )
                maxlen = l;
            leftbound = Math.max(leftbound,hash[s[i]] + 1);
            hash[s[i]] = i;
           
        }
    }
    l = i - leftbound;
    if ( l > maxlen )
        maxlen = l;
    return maxlen;
};