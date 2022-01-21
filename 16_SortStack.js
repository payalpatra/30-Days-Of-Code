// 16. Given a stack, sort the elements in the stack using one additional stack.

// sort([1, 3, 2, 4]) = [1, 2, 3, 4]


// Stack Implementation (for reference)\\
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // PUSH - Adding to the beginning of the stack
    push(value) {
        let newNode = new Node(value)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let oldFirst = this.first;
            this.first = newNode;
            newNode.next = oldFirst
        }
        return ++this.size
    }

    // POP - Removing from the beginning of the stack
    pop() {
        if (!this.first) return null;
        let oldFirst = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = oldFirst.next;
            oldFirst.next = null;
        }
        this.size--;
        return oldFirst;
    }
}


// Stack Input
let stack = [1, 3, 2, 4]


function sortStack() {

    let tempStack = [];
    while (stack.length > 0) {
        // pop out the first element
        let temp = stack.pop();

        // while temporary stack is not empty and
        // top of temporary stack is greater than temp
        while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
            // pop from temporary stack and
            // push it to the stack stack
            stack.push(tempStack[tempStack.length - 1]);
            tempStack.pop()
        }

        // push temp in temporary of stack
        tempStack.push(temp);
    }
    return tempStack;

}

console.log(sortStack());

// Time Complexity: O(N)
// Space Complexity: O(N)