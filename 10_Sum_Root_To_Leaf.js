// 10. Given a binary tree, where every node value is a Digit from 1-9 .Find the sum of all the numbers which are formed from root to leaf paths.


/*
Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var root;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

// ** APPROACH ** \\
/*

Traverse through the nodes and start adding those node until you reach the leaf node

*/


function sumOfRootToLeaf() {

    let current = root

    // Base Case
    if (root === null) return 0

    function traverse(node, sum) {

        if (node === null) return 0

        sum = sum * 10 + node.val

        // Reached the leaf node
        if (!node.left && !node.right) return sum

        // Add Left path sum aand right path sum
        return traverse(node.left, sum) + traverse(node.right, sum)

    }

    return traverse(current, 0)

}


console.log(sumOfRootToLeaf())