// 1. Find the median of two sorted arrays

// arr1 = [1, 3, 5]
// arr2 = [2, 4, 6]
// median(arr1, arr2) = 3.5

// Questions to ask - 1) Will both the arrays be of same length ?
//                    2) Should we return the decimal value or round it off ?

// ** APPROACH **

/*
------------------ METHOD 1 ------------------

1. Merge both the arrays [1,2,3,4,5,6]
2. Find the mid Indices :
If the length is even then --> (6/2 -1 , 6/2) = (2,3) --> 3+4/2 = 3.5
If the length is odd then --> (7/2) = 3.5

Time Complexity - 0(N1 + N2)
Space Complexity - 0(N1 + N2)

*/

// Note : If the arrays are sorted : Try Binary Search

/*
------------------ METHOD 2 ------------------

1. Lets assume that there are two arrays A and B with array A having the minimum number of elements.
   If this is not the case than swap A and B to make A having small size.
2. The edge cases like one array is empty or both are empty will be handled.
3. let n be the size of A and m be the size of B.
   Now think of an idea that if we have to find the median than we have to divide the whole merged array into two parts
   namely left and right parts.
   Now since we are given the size of left part (i.e (n+m+1)/2), Now look at below given example.
   
       A-> 1,2,3,4,5     n = 5
       B-> 1,2,3,4,5,6   m = 6
   
    Here merged array will look like :- 1,1,2,2,3,3,4,4,5,5,6 and median then is 3
    
    Now we can see our left part which is underlined. We divide A and B into two parts such that the 
    sum of left part of both A and B will result in left part of merged array.
    
    A-> 1,2,3,4,5     // pointers l =0 and r = n-1 hence mid = (l+r)/2;
       B -> 1,2,3,4,5,6

    we can see that left part of A is given as n/2 and since total length of left part in merged array
    is (m+n+1)/2, so left part of B = (m+n+1)/2-n/2;
    
    Now we just have to confirm if our left and right partitions in A and B are correct or not.
    
4. Now we have 4 variables indicating four values two from array A and two from array B.
    leftA -> Rightmost element in left part of A = 2
    leftb -> Rightmost element in left part of B = 4
    rightA -> Leftmost element in right part of A = 3
    rightB -> Leftmost element in right part of B = 5
    
    Hence to confirm that partition is correct we have to check the following conditions.
    leftA<=rightB and leftB<=rightA  // This is the case when the sum of two parts of A and B results in left part of merged array
    
    if our partition not works that means we have to  find other mid point in A and then left part in B
    This is seen when
     
    leftA > rightB    //means we have to dec size of A's partition
    so do r = mid-1;
    else
        do l =mid+1;
    
    Hence repeat the above steps with new partitions till we get the answers.
5. If leftA<=rightB and leftB<=rightA
    then we get correct partition and our answer depends on the total size of merged array (i.e. m+n)
    
    If (m+n)%2==0
     ans is max(leftA,leftB)+min(rightA,rightB)/2; // max of left part is nearest to median and min of right part is nearest to medain
    else
     ans is max(leftA,leftB);

Time Complexity - O(min(log m, log n)) 
Space Complexity - 0(1)
*/

// ------ METHOD 1 ------ \\
function median1(arr1, arr2) {
    let p1 = 0;
    let p2 = 0;
    let c = 0;

    let array = []

    while (p1 !== arr1.length && p2 !== arr2.length) {
        if (arr1[p1] < arr2[p2]) {
            array[c] = arr1[p1]
            p1++
        } else if (arr2[p2] < arr1[p1]) {
            array[c] = arr2[p2]
            p2++
        } else {
            array[c] = arr1[p1]
            p1++
            c++
            array[c] = arr2[p2]
            p2++
        }
        c++
    }

    while (p1 !== arr1.length) {
        array[c] = arr1[p1]
        p1++
        c++
    }
    while (p2 !== arr2.length) {
        array[c] = arr2[p2]
        p2++
        c++
    }

    if (array.length % 2 === 0) {
        let mid1 = Math.floor(array.length / 2 - 1)
        let mid2 = Math.floor(array.length / 2)
        return (array[mid1] + array[mid2]) / 2
    }
    if (array.length % 2 !== 0) {
        let mid = Math.floor(array.length / 2)
        return array[mid]
    }

}
console.log(median1([1, 3, 5], [2, 4, 6]))
// OUTPUT = 3.5 
/*
HOW .... ??
Total length = 6
mid indices = 2,3
median = (3 + 4)/2
       = 7/2
       = 3.5
*/

// ------ METHOD 2 ------ \\
function median(arr1, arr2) {
    // Make the smaller array as arr1
    //-- Swap if arr2 length is small --\\
    if (arr1.length > arr2.length) return median(arr2, arr1)

    // lengths of both the arrays
    let n1 = arr1.length;
    let n2 = arr2.length;

    let low = 0;
    let high = n1;
    let mergedMid = Math.floor((n1 + n2 + 1) / 2)


    while (low <= high) {

        // Left Half
        let cut1 = Math.floor((low + high) / 2)
        // Right Half
        let cut2 = mergedMid - cut1

        let l1 = cut1 === 0 ? Number.MIN_VALUE : arr1[cut1 - 1];
        let l2 = cut2 === 0 ? Number.MIN_VALUE : arr2[cut2 - 1];

        let r1 = cut1 === n1 ? INT_MIN : arr1[cut1];
        let r2 = cut2 === n2 ? INT_MIN : arr2[cut2];

        // To check the validity of the arrays 
        if (l1 <= r2 && l2 <= r1) {

            // For even number of total elements
            if ((n1 + n2) % 2 === 0) {
                let midian = Math.max(l1, l2) + Math.min(r1, r2)
                return midian / 2
                // For odd number of total elements
            } else {
                return Math.max(l1, l2)
            }
        } else if (l1 > r2) {
            high = cut1 - 1
        } else {
            low = cut1 + 1
        }
    }
    return 0.0

}

console.log(median([7, 12, 14, 15], [1, 2, 3, 4, 9, 11]))
// OUTPUT = 8
/*
HOW .... ??
Total length = 10 
median = (7 + 9)/2
       = 16/2
       = 8
*/