// 14. Given a linked list, write a function that prints the nodes of the list in reverse order.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);



function reverseLinkedList() {

    let prev = null;

    while (head) {
        // References the next Node of given linked list
        const next = head.next;
        // head.next point to previous Node, instead of the next Node of the given linked list   
        head.next = prev;
        // Move the prev Node pointer up to head    
        prev = head;
        // Move the head up to next Node of the given linked list    
        head = next;
    }

    return prev;



}

console.log(reverseLinkedList())