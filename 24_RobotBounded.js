// Robot Bounded In Circle \\

/*

On an infinite plane, a robot initially stands at (0,0) and faces north. The robot can receive one of three instructions.

"G": go straight 1 unit
"L": turn 90 degrees to the left
"R": turn 90 degrees to the right

The robort performs the instructions given in order and repeats the, forever.
Return true if and only if there exists a circle in the plane such that robot never leaves the circle.

Example 1: 
Input: instructions = "GGLLGG"
Output: true
Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees and then returns to (0,0)

When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

*/


var isRobotBounded = function (instructions) {
    let steps = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];
    let x = y = 0;

    let currStep = 1;
    let turn = (direction) => {
        if (direction === "L") currStep--;
        else if (direction === "R") currStep++;
        else if (direction === "G") {
            x += steps[currStep][0];
            y += steps[currStep][1];
        }
        if (currStep < 0) currStep = 3;
        if (currStep === 4) currStep = 0;
    }


    for (let i = 0; i < instructions.length * 4; i++) {
        turn(instructions[i]);
    }

    return (currStep !== 1) || (x === 0 && y === 0);
};

console.log(isRobotBounded("GGLLGG"))

// TIME COMPLEXITY : 0(N)
// SPACE COMPLEXITY : 0(1)