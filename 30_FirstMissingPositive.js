// Given an unsorted integer array nums, return the smallest missing positive integer.

/*
  
  // -- First Approach -- \\
  
  nums.sort((a,b)=> a-b );
  let ans = 1;
  for(let i = 0; i < nums.length; i++){
      if(nums[i] === ans)
          ans++;
  }
  return ans;
  */



// -- Optimized Approach -- \\

/*
 
  1. Place number "x" at index "x".
  2. Ignore -ve numbers.
  3. Ignore numbers greater than n. 
  4. The first index "i" that doesn't have i in it's value is smallest missing value in the array.
  
*/


var firstMissingPositive = function (nums) {

    let n = nums.length;

    for (let i = 0; i < nums.length; i++) {
        // We are using zero based indexing
        // So n will go to n -1 index

        let correctPos = nums[i] - 1;

        // 1. If the number lies in the range 1 - n (Ignore numbers greater than n and negative numbers) && 
        // 2. Wheather the number at the correct Position is not the present the number (because we need to swap)

        while (1 <= nums[i] && nums[i] <= n && nums[i] !== nums[correctPos]) {
            // Place number "x" at index "x"
            [nums[i], nums[correctPos]] = [nums[correctPos], nums[i]]
            // Nums[i] has changed and it might need a swap, so we check that place once again
            correctPos = nums[i] - 1

        }

    }

    // Iterate T check if the index is equal to number
    // If not equal and then tha's the missing positive number
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 !== nums[i]) return i + 1
    }

    return n + 1
};


// Time Complexity: O(n*log(n))
// Space Complexity: O(1) 
