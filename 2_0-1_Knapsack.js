// 2. Given a list of items with values and weights, as well as a max weight, find the
// maximum value you can generate from items where the sum of the weights is less than
// the max.

// Weights = [10, 20, 30]
// Values = [60, 100, 120]
// Maximum Weight = 50
// Weights we can fit into the knapsack = 20 + 30
//                                      = 50
// So Maximum Value = 100 + 120 = 220

// ** APPROACH **

/*

------------------ METHOD 1 ------------------

------- RECURSIVE APPROACH -------

This is a TOP DOWN solution : We are starting with the end results in mind and breaking it down into smaller chunks

For each item we gotta decide either we include the item or discard the item ,
we can use recursion to choose every possible combinations that would stay under our maximum weight.

It's gonna take an index
We consider two cases- 1) Consider the item
                       2) Exclude the item

So we call our function two times for both the cases and then compare them to get the maximum.
*/

// ------------------ METHOD 1 ------------------ \\

function knapsack(weights, values, maxWeight, i) {
    // Base Cases \\
    // We reached the last item
    if (i === weights.length) return 0;

    // Item is greater then the max weight : We Skip the item
    if (maxWeight - weights[i] < 0)
        return knapsack(weights, values, maxWeight, i + 1);

    // Compare the results of including and excluding the item
    // We include the current item and add the value
    return Math.max(
        knapsack(weights, values, maxWeight - weights[i], i + 1) + values[i],
        knapsack(weights, values, maxWeight, i + 1)
    );
}

function maxValueGenerator1(weightArray, valueArray, maxWeight) {
    return knapsack(weightArray, valueArray, maxWeight, 0);
}

console.log("RECURSION", maxValueGenerator1([10, 20, 30], [60, 100, 120], 50));

// Time Complexity: 0(2^N)
// Space Complexity: 0(1)



// ------------------ METHOD 2 ------------------ \\
// ------- MEMOZIATION APPROACH -------

function memoziation(wt, v, W, n, dp) {

    // Base condition
    if (W === 0 || n === 0) return 0;

    // Return the dp if there is no value found
    if (dp[n][W] !== 0) {
        return dp[n][W];
    }

    // Current Item's weight is greater than maximum weight
    if (wt[n - 1] > W) {
        return memoziation(wt, v, W, n, dp)
    } else {
        return dp[n][W] = Math.max(memoziation(wt, v, W - wt[n - 1], n - 1, dp) + v[n - 1], memoziation(wt, v, W, n - 1, dp))
    }

}

function maxValueGenerator1(weightArray, valueArray, maxWeight) {

    // Row
    let dp = new Array(weightArray.length + 1)

    // Initialization
    for (let i = 0; i < dp.length; i++) {

        // Column = Maximum Capcity + 1
        // Initializing Every Row with 0
        dp[i] = new Array(maxWeight + 1).fill(0);

    }

    return memoziation(weightArray, valueArray, maxWeight, weightArray.length, dp);
}

console.log("MEMOZIATION", maxValueGenerator1([10, 20, 30], [60, 100, 120], 50));

// Time Complexity:  0(N * W)
// Space Complexity: 0(N * W)

/*
------------------ METHOD 3 ------------------

------- DYNAMIC PROGRAMMING APPROACH -------
This is a BOTTOM UP solution : We are start with the sub problems and build up to the final solution

Notes : 
Dynamic programming relies on two things :-
1. Optimal Substructure
2. Overlapping Sub Problems

5 * 4 MATRIX 

Rows - Represents the Index
Comlumns - Weights

Should Go upto the Max weight

Values in the cell - Maximum values 

    0, 1, 2, 3, 4, 5
0 [ 0, 0, 0, 0, 0, 0 ]
1 [ 0, 0, 0, 0, 0, 0 ] 
2 [ 0, 0, 0, 0, 0, 0 ]
3 [ 0, 0, 0, 0, 0, 0 ]

    0,  1,  2,  3,  4,  5
0 [ 0,  0,  0,  0,  0,  0  ]
1 [ 0,  6,  6,  6,  6,  6  ] 
2 [ 0,  6,  10, 16, 16, 16 ]
3 [ 0,  6,  10, 16, 18, 22 ]

This is How the Dp will look like after Initializing
[
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ]
]

*/

// ------------------ METHOD 3 ------------------ \\

function maxValueGenerator(weightArray, valueArray, W) {

    // Row --> N + 1
    let dp = new Array(weightArray.length + 1);

    // At this point an empty array is created
    // And Initialized 0th value of the rows and columns with 0
    for (let i = 0; i < dp.length; i++) {

        // Column = Maximum Capcity + 1
        // Initializing Every Row with 0
        dp[i] = new Array(W + 1).fill(0);

    }


    // Note : We don't look at the first row because it is 0
    // We start from index 1 

    // Outer Looping through rows
    for (let i = 1; i <= weightArray.length; i++) {
        for (let j = 0; j <= W; j++) {

            // Two Possible Cases : 
            /* 1. Item is too big and we can't include it
               2. Decide wheather to include it or not 
            */

            // Note : j is the current max weight 

            // Item is greater than maximum weight
            if (weightArray[i - 1] > j) {
                // Set the value as the previous value
                dp[i][j] = dp[i - 1][j]

                // The value will be the maximum value between including and excluding the current item    
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weightArray[i - 1]] + valueArray[i - 1])
            }
        }
    }

    return dp[weightArray.length][W]
}

console.log("Dynammic Programming", maxValueGenerator([10, 20, 30], [60, 100, 120], 50));

// Time Complexity:  0(N * W)
// Space Complexity: 0(N * W)
