// 19. Given a string, write a function to compress it by shortening every sequence of the same character to that character followed by the number of repetitions. If the compressed string is longer than the original, you should return the original string

/*
compress("a") = "a"
compress("aaa") = "a3"
compress("aaabbb") = "a3b3"
compress("aaabccc") = "a3b1c3"
*/

/*
Two Cases :
1) If the next charcter is same then we keep going through the loop
2) If the next charcter is different then we append the count and character
*/


function stringCompression(s) {
    let output = "";
    let count = 1;

    for (let i = 0; i < s.length - 1; i++) {
        if (s.charAt(i) === s.charAt(i + 1)) {
            count++;
        } else {
            output = output + s.charAt(i) + count;
            count = 1;
        }
    }
    output = output + s.charAt(s.length - 1) + count;

    return output.length < s.length ? output : s;


}

console.log(stringCompression("aaabccc"))

// Time Complexity : O(N)
// Space Complexity : O(1)