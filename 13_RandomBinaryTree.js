// 13. Implement a binary tree with a method getRandomNode() that returns a random node.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.children = 0;
    }

}

let node = new Node(5);
node.left = new Node(2);
node.right = new Node(7);

node.left.left = new Node(1)
node.left.right = new Node(3)

node.right.left = new Node(6)
node.right.right = new Node(8)


// ** APPROACH ** \\

/*


*/


// Counts total number of node
function getElements(root) {
    if (root == null)
        return 0;
    return getElements(root.left) +
        getElements(root.right) + 1;
}
console.log("Total number of Nodes", getElements(node))

// Inserts Children count for each node
function insertChildrenCount(root) {
    if (root == null)
        return null;

    root.children = getElements(root) - 1;
    root.left = insertChildrenCount(root.left);
    root.right = insertChildrenCount(root.right);

    return root;
}
console.log("Inserts Children count for each node", insertChildrenCount(node))

// returns number of children for root
function children(root) {
    if (root == null)
        return 0;
    return root.children + 1;
}
console.log("Number Of children for root", children(node))



// Helper Function to return a random node
function randomNodeUtil(root, count) {
    if (root == null) return 0;

    if (count == children(root.left)) {
        console.log("Randome Node Generated Successfully: 👇")
        return  root.val
    };

    if (count < children(root.left)) return randomNodeUtil(root.left, count);
 
    return randomNodeUtil(root.right, count - children(root.left) - 1);
}

// Generates Randome Node
function randomBinaryTree(root) {
    let count = Math.floor(Math.random() *
        (root.children + 1));

    return randomNodeUtil(root, count);

}

console.log(randomBinaryTree(node))



/*
TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(1)
*/