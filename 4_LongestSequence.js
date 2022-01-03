// Given an unsorted array, find the length of the longest sequence of consecutive numbers in the array.

/*
consecutive([4, 2, 1, 6, 5]) = 3, [4, 5, 6]
consecutive([5, 5, 3, 1]) = 1, [1], [3], or [5]
*/

// ** APPROACH **
/*
1. Sort the array
2. Loop through the array and if the next consecutive element is found 
3. Inmcreament the current length
4. Return the maximum length after visiting all the elements of the array
*/

// ------------------ METHOD 1 ------------------ \\

function longestSequenceOfNumbers1(arr) {
    let maxLen = 1;
    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {
        let currLen = 1;

        while (arr[i] === arr[i + 1] - 1) {
            currLen += 1;
            i++;
        }
        maxLen = Math.max(maxLen, currLen);
        currLen = 1;

    }

    return maxLen;

}


console.log(longestSequenceOfNumbers1([4, 2, 1, 6, 5]))

// Time Complexity: 0(N Log N + 0(N))
// Space Complexity: 0(1)


// ** APPROACH **
/*
1. Create a set to remove the duplicates
2. Loop through the array
3. Check if the current element is the left most element of the subsequence
4. Continue incrementing the element and check if it is present in the set
*/

// ------------------ METHOD 2 ------------------ \\

function longestSequenceOfNumbers(arr) {

    // Create a set to avoid all the duplicates 
    let s = new Set();
    let ans = 0;

    // Hash all the arrays of elements
    for (let i = 0; i < arr.length; i++) {
        s.add(arr[i]);
    }
    let n = arr.length

    for (let i = 0; i < n; i++) {

        // Means it could possibly the first element of the longest subsequence
        // Means arr[i] could be the first element of the longest subsequence
        if (!s.has(arr[i] - 1)) {
            // Check for the presence of next consequitive elements 
            let j = arr[i];
            while (s.has(j)) {
                // Increment j to check if the next element is present
                j++;
            }
            ans = Math.max(ans, j - arr[i])

        }
    }

    return ans
}


console.log(longestSequenceOfNumbers([4, 2, 1, 6, 5]))

// Time Complexity: 0(N)
// Space Complexity: 0(N)