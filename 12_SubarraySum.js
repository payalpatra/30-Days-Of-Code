// 12. Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.

/*

Input: N = 5, S = 12 A[] = {1,2,3,7,5}
Output: 2 4
Explanation: The sum of elements 
from 2nd position to 4th position 
is 12.

Input: N = 10, S = 15 A[] = {1,2,3,4,5,6,7,8,9,10}
Output: 1 5
Explanation: The sum of elements 
from 1st position to 5th position
is 15.

*/

function subArraySum1(arr, n, s) {
    for (let i = 0; i < n; i++) {
        let sum = arr[i];
        for (j = i + 1; j < arr.length; j++) {
            sum = sum + arr[j];
            if (sum === s) {
                return [i + 1, j + 1];
            }
        }
    }
    return [];
}

console.log(subArraySum1([1, 2, 3, 7, 5], 5, 12));

/*
TIME COMPLEXITY - O(n^2)
SPACE COMPLEXITY - O(1)
*/

// ** APPROACH **  \\
/*
Take a start pointer and run a loop .
Keep track of the current sum
if the current sum is greater than the target sum substract the start element from the current sum and current sum.
*/

function subArraySum(arr, n, sum) {
    let start = 0;
    let currSum = arr[0];

    for (let end = 1; end < n; end++) {

        // We found the sum
        if (currSum === sum) return [start + 1, end ];

        currSum = currSum + arr[end];

        while(currSum > sum && start < end) {
            currSum = currSum - arr[start];
            start++;
        }

    }
    return -1
}

console.log(subArraySum([1, 2, 3, 7, 5], 5, 12));

/*
TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(1)
*/