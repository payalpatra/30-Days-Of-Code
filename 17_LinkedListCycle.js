// 17. Given a linked list, determine whether it contains a cycle.

/*
APPROACH

Exploits the fact that slow and fast wil definitely intersect at a point if there is any cycle.next
So we take a slow pointer and  a fast pointer to determine whether a cycle is present or not.
*/

// Node Class
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// Linked List
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

head.next.next.next.next = head.next;


function linkedListCycle(){
    let slow = head;
    let fast = head.next

    while(fast !== null && fast.next !== null){
        if(slow === fast){
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
        
    }
    return false

}

console.log(linkedListCycle())

/*
Time Complexity : O(N)
Space Complexity : O(1)
*/