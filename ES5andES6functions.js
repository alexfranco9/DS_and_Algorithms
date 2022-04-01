// ES5 Functions with regular loop and forEach loop
// - this is O(n) Linear time, the number of operations grow. n operations.

function compressAllBoxesAA(boxes) {
    for (var i = 0; i <= boxes.length; i++) {
        console.log(boxes[i]);
    }
};

function compressAllBoxes(boxes) {
    boxes.forEach(function(i) {
        console.log(i);
    });
};

// ES6 Functions - this is O(n) Linear time, the number of operations grow. n operations.

const compressAllBoxesBB = boxes => {
    boxes.forEach(i => console.log(i));
};

// O(1) - Constant time, no matter how many items we will only run the set amount of operations.

function compressAllBoxesCC(boxes) {
    console.log(boxes[0]);
};



compressAllBoxes(["one", "two", "three", "four", "five"]);
compressAllBoxesAA(["one*", "two*", "three*", "four*", "five*"]);
compressAllBoxesBB(["one", 1, "two", 2, "three", 3]);