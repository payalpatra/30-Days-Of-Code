// Given a 2D integer array matrix, return the transpose of matrix.

/*
Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
*/

var transpose = function (matrix) {
    let transpose = []

    for (let row = 0; row < matrix[0].length; row++) {
        let arr = [];
        for (let col = 0; col < matrix.length; col++) {
            arr.push(matrix[col][row])

        }
        transpose.push(arr)
    }

    return transpose


};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// Time Complexity : O(M * N)
// Space Complexity : O(M * N)