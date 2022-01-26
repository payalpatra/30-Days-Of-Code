// 20. Given two integers, write a function to determine whether or not their binary representations differ by a single bit.

/*
gray(0, 1) = true
gray(1, 2) = false
*/


function grayCode1(a, b) {
    let x = a ^ b;

    while(x > 0){
        if(x % 2 === 1 && x >> 1 > 0) return false;
        x = x > 1;
    }
    return true;

}

console.log(grayCode1(1, 2));

function grayCode(a, b) {
    let x = a ^ b;
    return (x & (x-1)) == 0;

}

console.log(grayCode(1, 2));

