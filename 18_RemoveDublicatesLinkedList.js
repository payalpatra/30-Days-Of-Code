// 18. Given an unsorted linked list, write a function to remove all the duplicates.

// Node
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
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);


function removeDuplicates(){

    let dummy  = head;
    let prev = null;
    let hash = {}
    
    while(dummy !== null){

        let currVal = dummy.val;

        // Current Value already present.(seen before)
        if(hash[currVal]){
            prev.next = dummy.next;
        // Current value is not present.
        // Add this to hash    
        }else{
            hash[currVal] = true;
            prev = dummy
        }
      dummy = dummy.next
    
    }

    return head
  
    
    return head.next;

}

console.log(removeDuplicates())
