// Given a directed graph, find the shortest path between two nodes if one exists.

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    // Add Vertex
    addVertex(v) {
        if (!this.adjacencyList[v]) {
            this.adjacencyList[v] = [];
        }
    }

    // Add edge
    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
            // this.adjacencyList[v2].push(v1);
        }
    }
}

let graph = new Graph()

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(5)
graph.addVertex(4)
graph.addVertex(3)


graph.addEdge(1, 2)
graph.addEdge(2, 5)
graph.addEdge(5, 4)
graph.addEdge(4, 1)
graph.addEdge(1, 3)
graph.addEdge(4, 3)

/* graph

1 ----------------> 2 
/\                  |
| \/                |
|  3                |
| /\               \/
4 <---------------- 5

*/

// ShortestPath(2, 3) 
// OUTPUT  2 -> 5 -> 4 -> 

/*
What is there is no path between the two vertexes 
return []
*/

/*
We can use breadth first search

*/


function ShortestPath(v1, v2) {

    if(v1 === null || v2 === null) return;

    if(v1 === v2) return [];

    // Keep track of the next node we have to visit
    // Initializa a queue
    let toVisit = [];

    // Keep Track of the parents so we can reconstruct our path
    let parents = new Map();

    // Initializa the BFS 
    toVisit.push(v1);
    parents[v1] = null;

    // Traverse untill we ran out of nodes
    while(toVisit.length){
        let curr = toVisit.pop();

        // If we find the last node then we are done with the traversing
        if(curr === v2) break;

        // If the current node doesn't have neighbors then we skip
        if(graph.adjacencyList[curr] === null) continue;

        // Add all the children to the queue
        graph.adjacencyList[curr].forEach(neighbor => {
            console.log(neighbor)
            if(!parents[neighbor]){
                toVisit.push(neighbor);
                parents[neighbor] = curr;
            }
            
        });


    }


    if(parents[v2] === null ) return null;

    // Create the output list and add the path to the list
    // Backtrack the path
    let output = [];
    let n = v2;

    while(n !== null){
        output.push(n)
        n  = parents[n]
    }
    
   
    return output.reverse(); 
}
 
console.log(ShortestPath(2, 3))

// Time Complexity : 0(v + e)
// Space Complexity: 0(v)