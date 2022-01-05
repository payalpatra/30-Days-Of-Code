// Given a boolean matrix, update it so that if any cell is true, all the cells in that row and column are true.

/*
[true, false, false]          [true, true, true ]
[false, false, false] ------> [true, false, false]
[false, false, false]         [true, false, false]
*/

// ------------------ METHOD 1 ------------------ \\

function zeroMatrix1(matrix) {
    let visit = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === true) {
                visit[i] = true;
            }
        }
    }

    let k = 0;

    while (k !== visit.length) {
        if (visit[k] !== undefined) {
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[0].length; j++) {
                    if (i === k || j === k) {
                        matrix[i][j] = true;
                    }
                }
            }
        }

        k++;
    }

    return matrix;
}

console.log(
    zeroMatrix1([
        [true, false, false],
        [false, false, false],
        [false, false, false],
    ])
);

// Time Complexity: (M * N) + (K * M * N) => M * N * K
// Space Complexity: K

// ------------------ METHOD 2 ------------------ \\

function zeroMatrix2(matrix) {
    // Create two arrays
    let row = new Array(matrix.length);
    let col = new Array(matrix.length);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === true) {
                row[i] = true;
                col[i] = true;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (row[i] === true || col[j] === true) {
                matrix[i][j] = true;
            }
        }
    }

    return matrix;
}

console.log(
    zeroMatrix2([
        [false, false, false],
        [false, false, false],
        [false, false, true],
    ])
);

// Time Complexity: 0 (M * N)
// Space Complexity: O(N + M)

// ------------------ METHOD 3 ------------------ \\

function zeroMatrix(matrix) {

    // Variables to check if there are any false
    let rowZero = true;
    let colZero = true;

    // Update the First row and First Col if false is counter
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[0][j] === false) {
                rowZero = false;
            }

            if (matrix[i][0] === false) {
                colZero = false;
            }

            if (matrix[i][j] === true) {
                matrix[0][j] = true;
                matrix[i][0] = true;
            }

        }
    }

    // Modify the cells according to the values in the first row and first column
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {

            if (matrix[0][j] === true || matrix[i][0] === true) {
                matrix[i][j] = true;
            }

        }
    }

    // Modify the first row if there was any true 
    if(rowZero === true) {
        for(let i = 0; i < matrix[0].length; i++){
            matrix[0][i] = true;
        }
    }
    // Modify the first col if there was any true 
    if(colZero === true) {
        for(let i = 0; i < matrix[0].length; i++){
            matrix[i][0] = true;
        }
    }


    return matrix;
}

console.log(
    zeroMatrix([
        [false, false, false, false],
        [false, true, false, false],
        [false, false, true, false],
        [true, true, true, false],
    ])
);

// Time Complexity: 0 (M * N)
// Space Complexity: O(1)


// [true, true,  true, false]
// [true, true, true, true]
// [true, true, true, true]
// [true, true, true, true]