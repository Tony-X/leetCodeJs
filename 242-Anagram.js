/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length)
        return false;
     var ss=[];
     var tt=[];
     for ( i=0 ;i < s.length; i++)
         ss.push(s.charAt(i)), tt.push(t.charAt(i));
   
   // console.log(ss);
 //   console.log(tt);
    return ss.sort().join() == tt.sort().join();
};