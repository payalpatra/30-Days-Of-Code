// Given a sorted array and a number k, find the pair in array whose sum is closest to k

/*
Ekamples:

Input: arr[] = {10, 22, 28, 29, 30, 40}, k = 54
Output: 22 and 30

Input: arr[] = {1, 3, 4, 7, 10}, k = 15
Output: 4 and 10
*/

function closestToK(arr, x) {

    // To store indexes of result pair
    let res_l = 0, res_r = 0;

    // Initialize left and right indexes
    // and difference between
    // pair sum and x
    let l = 0; 
    let r = arr.length - 1;
    let diff = Number.MAX_VALUE;

    // While there are elements
    // between l and r
    while (l < r) {
        // Check if this pair is closer
        // than the closest pair so far
        let currDiff = Math.abs(arr[l] + arr[r] - x);
        if (currDiff < diff) {
            res_l = l;
            res_r = r;
            diff = Math.abs(arr[l] + arr[r] - x);
        }

        // If this pair has more sum,
        // move to smaller values.
        if (arr[l] + arr[r] > x)
            r--;
        else // Move to larger values
            l++;
    }
    return [res_l, res_r];
}

    console.log(closestToK([10, 22, 28, 29, 30, 40], 54))