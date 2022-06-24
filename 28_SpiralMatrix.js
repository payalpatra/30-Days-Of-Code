// Given an m x n matrix, return all elements of the matrix in spiral order.

/*
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/


var spiralOrder = function(matrix) {
    // --- Possible Directions to figure out --- \\

/*

1. Moving down
2. Movig Left
3. Moving Up
4. Moving Right

Basically we have to move in this order

1. First row
2. Last col
3. Last row
4. First col
5. second row 

*/



let result = [];


let rows = matrix.length; 
let cols = matrix[0].length

let left = 0; // First Column
let right = cols - 1; // Last Column
let top = 0; // Top Row
let bottom = rows - 1 // Bottom Row

while (left <= right && top <= bottom) {
  
  for (let col = left; col <= right; col++) result.push(matrix[top][col]);
  // At this point we have filled up the first row, so we have to increament row
  top++;
  
  
  for (let row = top; row <= bottom; row++) result.push(matrix[row][right]);
  // At this point we have filled up the last column, so we have to decreament the col
  right--;
  
  
  if (top <= bottom) {
      for (let col = right; col >= left; col--) result.push(matrix[bottom][col]);
      // At this point we have filled up the last row, so we have to decreament bottom to move up and fillup the last upper row
      bottom--;
  }
  
  
  if (left <= right) {
      for (let row = bottom; row >= top; row--) result.push(matrix[row][left]);
      left++;
}
  
  
}

return result;


};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))

// Time Complexity : O(M * N)
// Space Complexity : O(M * N)