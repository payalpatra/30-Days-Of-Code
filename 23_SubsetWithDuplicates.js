// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// Example 1:
/*
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
*/

// Example 2:
/* 
Input: nums = [0]
Output: [[],[0]]
*/




function subsetsWithDup(nums){

    // To find subsets
    function findSubset(arr,curr){
        res.push([...curr])
        for(let i=0;i<arr.length;i++){
            if(i=== 0 || arr[i] !== arr[i-1]){
                curr.push(arr[i])
                findSubset(arr.slice(i+1),curr)
                curr.pop()
            }
        }
    }


    let res = []
    nums.sort((a,b)=>{return a-b})
    findSubset(nums,[])
    return res

    
}

console.log(subsetsWithDup([1,2,2]))

// Time Complexity: 2^N * N 
// Space Complexity: 2^N * O(K)

// Note: 2^N for generating subsets and N for copying subsets