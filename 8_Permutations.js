// Write a function that returns all IntegersPermutation of a given list.

/*

IntegersPermutation([1, 2, 3])
[1, 2, 3]
[1, 3, 2]
[2, 1, 3]
[2, 3, 1]
[3, 1, 2]
[3, 2, 1]

*/


// Permutation of Array of Integers \\
function integersPermutation(arr) {

    let results = [];

    function permute(arr, idx, results) {
        if (idx === arr.length) results.push([...arr])

        for (let i = idx; i < arr.length; i++) {

            [arr[idx], arr[i]] = [arr[i], arr[idx]];
            permute(arr, idx + 1, results);
            [arr[idx], arr[i]] = [arr[i], arr[idx]];

        }

    }
    permute(arr, 0, results);

    return results;

}

console.log(integersPermutation([1, 2, 3]))

/*
TIME COMPLEXITY - 
SPACE COMPLEXITY - 
*/

/* 
stringPermutation("ABC")
["abc",  "acb" , "bac",  "bca",  "cab",  "cba"]
*/

function stringPermutation(str) {

    // Swaping elements in the string
    function swap(a, i, j) {
        let charArray = a.split("");
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]]
        return charArray.join("");
    }

    function permute(str, low, high) {
        if (low === high) console.log(str)

        // Run the loop from low to high
        for (let i = low; i <= high; i++) {
            // Swap the fixed letter wih itself
            str = swap(str, i, low)
            // Find all the possible combination of left out elemnts
            permute(str, low + 1, high)
            // Backtracking
            // To recover our original string
            str = swap(str, low, i)
        }

    }

    permute(str, 0, str.length - 1)

}

console.log(stringPermutation("ABC"))

/*
TIME COMPLEXITY - O(n*n!)
SPACE COMPLEXITY - O(high – low)
*/