// Sliding Window Maximum

/* You are given an array of integers arr, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.
*/

/*
Input: arr = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/

// BRUTE FORCE APPROACH
function slidingWindow1(arr, k) {
    let output = []

    for (let i = 0; i < arr.length - (k - 1); i++) {

        let max = arr[i]

        for (let j = i; j <= i + k - 1; j++) {
            max = Math.max(arr[j], max);
        }

        output.push(max)
    }
    return output
}

// Time Complexity: O(N * k)
// SPACE Complexity: O(N)

console.log(slidingWindow1([1, 3, -1, -3, 5, 3, 6, 7], 3))

/*
--------- APPROACH ---------

1. Start iterating over the Input Array
2. While Traversing check if the QUEUE has any elements (Maintain Queue in decreasing Order)
      I. Initially Push 0 (First Index)
      II. If there is element
         a) Compare queue[front] with curr value of input array, 
               -- if curr value greater pop and push the curr value
         

*/


function slidingWindow(arr, k) {

    // Keeps count of current indices
    const queue = [];
    const res = [];
    for (let i = 0; i < arr.length; i++) {

        while (queue && arr[queue[queue.length - 1]] <= arr[i]) {
            queue.pop();
        }
        queue.push(i);
        // remove first element if it's outside the window
        if (queue[0] === i - k) {
            queue.shift();
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)

        if (i >= k - 1) {
            res.push(arr[queue[0]]);
        }
    }
    return res;

}

// Time Complexity: O(N)
// SPACE Complexity: O(K)

console.log(slidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))