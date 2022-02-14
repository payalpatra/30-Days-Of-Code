// Single Number \\

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
*/


/*
// ------ NOTES ------ \\

we have to know the bitwise XOR :-

0 ^ N = N
N ^ N = 0

*/

function singleNumber(nums) {
    let result = nums[0];

    for(let i = 1; i < nums.length; i++) {
        console.log(result)
        result = result ^ nums[i];
    }

    return result;

}


console.log(singleNumber([2,1, 2]))

// Time Complexity: O(N)
// SPACE Complexity: O(1)