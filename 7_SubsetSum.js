// Given a list arr of N integers, Print summs of all subset in it.

/*
Input:
N = 2
arr[] = {2, 3}
Output:
0 2 3 5
*/

/*
Explanation:
When no elements is taken then Sum = 0.
When only 2 is taken then Sum = 2.
When only 3 is taken then Sum = 3.
When element 2 and 3 are taken then 
Sum = 2+3 = 5.
*/


// Note : If n = 3 then total number of subsets is 2^n = 8'

// BRUTE FORCE 
// POWER SET APPROACH TO GENERATE ALL THE SUBSETS (USE BIT MANIPULATION)

// DRY RUN

/*                |
                [ 3, 1, 2]
 pick (Sum = 3), Not to pick (Sum = 0)
             |                     |
        [ 3, 1, 2]            [ 3, 1, 2]
    pick (Sum = 3)       Decide to pick (Sum = 3)            
 */

function subsetSums(arr, n) {

    // When you are starting you will be at zeroth index and the sum will be zero 
    let subsets = [];

    function findSubsets(index, sum) {
        // Base Case
        if (index === n) {
            subsets.push(sum);
            return
        }

        // Pick the element present in the current index
        findSubsets(index + 1, sum + arr[index])

        // Dont pick the element present in the current index
        findSubsets(index + 1, sum)
    }

    findSubsets(0, 0)

    subsets.sort((a, b) => a - b)

    return subsets

}

console.log(subsetSums([2, 3], 2))

/*
TIME COMPLEXITY - 2^N + 2^N log(2^N)
SPACE COMPLEXITY - 2^N
*/