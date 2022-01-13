// 9. Given a string s, find the length of the longest substring without repeating characters.

/*
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

/* ** APPROACH**

Create a hash data structure to keep track of the indices of each element.
Take two pointers start and end.
End will increament as the loop proceeds.
Check if the current element is already present in the hash.
  if element is already present we will increament start pointer by element by the repeated elements previous index + 1
  if it is not present we will just assign the max length (end - start ) + 1
Lastly return Max length

*/

function longestSubstring(s) {
    let start = 0;
    let end = 0;
    let map = {};
    let maxLen = 0;

    // Convert the string to array
    let arr = s.split("")

    for(end = 0; end < arr.length; end++) {
        let char = arr[end];
        let current = map[char];

        if(current !== undefined && start < end) {
            start = current + 1;
        }else{
            maxLen = Math.max(maxLen, (end - start) + 1)
        }

        map[char] = end

    }
    return maxLen

}

console.log(longestSubstring("abcabcbb"))


// Time Complexity :
// Space Complexity : 