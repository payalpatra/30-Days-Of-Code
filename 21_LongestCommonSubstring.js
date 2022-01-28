// 21. Given two strings, write a function that returns the longest common substring.

// longestSubstring("ABAB", "BABA") = "ABA"

function lcs(str1, str2) {

    const dp = [];
    let m = str1.length;
    let n = str2.length;
    
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // two  possible scenarioes:
            // 1. the current char of str1 and str2 does not match
            // 2. the current char of str1 and str2 matches
            
			if (str1.charAt(i - 1) != str2.charAt(j - 1)) {
                // check left and top for longer subsequence length
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
            else {
                // check diag for prev longest subsequence length and add 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }
    
    return dp[m][n];

}

console.log(lcs("ABAB", "BABA"))

// Time Complexity : O(mn)
// Space Complexity : O(mn)