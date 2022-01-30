// 22. Implement Priority Queue

/*
PriorityQueue {
    values: [
      Node { val: 'High Priority', priority: 1 },  
      Node { val: 'Second Priority', priority: 2 },
      Node { val: 'Third Priority', priority: 3 }, 
      Node { val: 'Forth Priority', priority: 4 }, 
      Node { val: 'Fift Priority', priority: 5 },  
      Node { val: 'Last Priority', priority: 6 }   
    ]
  }
*/

// Node
class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

// Priority Queue
class PriorityQueue{
    constructor(){
        this.values = []
    }

    // Enqueue - adds an element to the queue according to its priority. 
    enqueue(val, priority){
        
        let newNode = new Node(val, priority);
        // Add the node to the end
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while(idx > 0){
            let parentIdx = Math.floor((idx -1 /2));
            let parent = this.values[parentIdx];
            if(parent.priority <= element.priority) break;

            // Swap 
            this.values[parentIdx] = element;
            this.values[idx]= parent;
            // Update the index and loop over 
            idx = parentIdx 
        }
    }

    // Dequeue - Removes an element from the priority queue. 
    dequeue(){
        let max = this.values[0];
        let end = this.values.pop();
        this.values[0] = end;

        this.bubbleDown();
        return max;

    }

    bubbleDown() {
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 1;
            let swap = null;
            let leftChild,rightChild;

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];

                if((swap === null && rightChild.priority < element) || 
                (swap !== null && rightChild.priority < leftChild.priority )){
                    swap = rightChildIdx
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap


        }
    }

    // Front - Returns the front element of the priority queue
    front(){
        if(this.values.length === 0) return null;

        return this.values[0]
    }

    // Rear - Returns the last element of the priority queue
    rear(){
        if(this.values.length === 0) return null;

        return this.values[this.values.length - 1]
    }

}

let queue = new PriorityQueue();

queue.enqueue("High Priority", 1);
queue.enqueue("Second Priority", 2);
queue.enqueue("Fift Priority", 5);
queue.enqueue("Third Priority", 3);
queue.enqueue("Forth Priority", 4);
queue.enqueue("Last Priority", 6);

// dequeue
// console.log(queue.dequeue());

console.log("Front", queue.front());
console.log("Rear", queue.rear());


console.log(queue);