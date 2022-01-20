// 15. Given a binary tree, write a function to determine whether the tree is balanced.


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);


root.right.left = new Node(6);


function isBalancedBinaryTree() {
    let current = root;

    if (root === null) return 0;


    function traverse(node) {
        if (!node) return 0;

        let left = 1 + traverse(node.left);
        let right = 1 + traverse(node.right);

        if (Math.abs(left - right) > 1) return Infinity;

        return Math.max(left, right)

    }
    return traverse(current) === Infinity ? false : true;

}

console.log(isBalancedBinaryTree())

/*
TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(1)
*/