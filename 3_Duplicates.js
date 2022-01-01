// 3. Given an array of integers where each value 1 <= x <= len(array), write a function that finds all the duplicates in the array.

/*
dups([1, 2, 3]) = []
dups([1, 2, 2]) = [2]
dups([3, 3, 3]) = [3]
dups([2, 1, 2, 1]) = [1, 2]
*/

// ------------------ METHOD 1 ------------------ \\

function duplicates1(arr) {
    let dups = [];

    let map = {};

    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];

        if (!map[ele]) {
            map[ele] = 1;
        } else if (map[ele]) {
            dups.push(ele);
        }
    }

    return dups;
}

console.log(duplicates1([2, 1, 2, 1]))

// Time Complexity: 0(N)
// Space Complexity: 0(N)


// ------------------ METHOD 2 ------------------ \\

function duplicates(arr) {

    let dups = []

    for (let i = 0; i < arr.length; i++) {

        // We find the index to be checked by subtracting current element with -1
        let idx = Math.abs(arr[i]) - 1;

        // If the element present in the index is negative then its a duplicate
        if (arr[idx] < 0) {
            dups.push(Math.abs(arr[i]))
            // We are visiting the element for the first time.
            // We convert it to negative 
        } else {
            arr[idx] = - arr[idx]
        }
    }

    return dups;
}

console.log(duplicates([2, 1, 2, 1]))

// Time Complexity: 0(N)
// Space Complexity: 0(1)
