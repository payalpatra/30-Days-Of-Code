// Given an n x m array where all rows and columns are in sorted order, write a function to determine whether the array contains an element x.

/*


contains([1,  2,  3,  4]
         [5,  6,  7,  8]
         [9, 10, 11, 12]) = True

*/

// BRUTE FORECE APPROACH \\
function contains1(matrix, x) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === x){
                return true;
            }
        }
    }
    return false;
}

console.log(contains1(
[[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]], 7))

// Time Complexity : O(N^2)
// Space Complexity : O(1)

// ** APPROACH ** \\

/*

Compare each row's last element with x;
if x is lesser than the current element then x is not present in that row and we need to increament the row pointer.
if x is greater than the current element then x is  present in that row and we need to decreament the col pointer.

*/


// OPTIMIZED APPROACH \\
function contains(matrix, x) {
    let row = 0;
    let col = matrix.length - 1;
    
    while(row < matrix[0].length && col >= 0){
        // Element Found
        if(matrix[row][col] === x) return true;
        if(matrix[row][col] < x) row++;
        else col--
    }
   
    
    return false;
}

console.log(contains(
    [[1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]], 7))

// Time Complexity : O(N + M)
// Space Complexity : O(1)