// WARM UP: Write some code that loops through an array and prints the values out
// EX: Given var arr = [1, 5, 8, 2, 6], your console should print out:
// 1
// 5
// 8
// 2
// 6

// ** Be sure to make a js file in VS Code. ** //


// On your own:
    // Challenge 1: Write it without a for loop (and no function)
    //  and assume it is only happening once with this exact
    //  array. If so, would you need a function?
    //     — Type in your own file, then copy/paste in chat in a DM to me.
    
    // Challenge 2: Refactor your code - use a for loop to follow the 
    //             “D R Y” practice and make it shorter.
    
    // Challenge 3: If it doesn’t already work with any size array, refactor 
    //                it so it does.

// 1.
var arr = [1,5,8,2,6]
    console.log(0)
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)

// 2.
for(var i = 0; 0 < arr.length; i++){
    console.log(arr)
}

// 3. 
function print()


// GROUP CHALLENGE LET'S GOOOO!


// Values Greater than Second

// Write a function that takes an array and returns the number of values 
// that are greater than the second value in the array.

// YOUR CODE HERE

// EX: Given the array:
var testArray1 = [2, 5, 19, 3, 10, 9]
// Your 2nd value is 5, and the number (count) of values greater than 5
// in the array is 3. That is, 19 is > 5, 10 is > 5 and 9 is > 5 so there are 
// 3 values greater than 5, and you would return the number 3.

function counter(arr){
    var total = 0;
    for (i = 0; i < arr.length; i++){
    if(arr[i] > arr[1]){
      total++
    }    
}
console.log(total);
}
counter(testArray1)

// EX: Given the array:
var testArray2 = [4, 3, 10, 1, 6, 9, 2]
// Your 2nd value is 3 and the number of values greater than 3 is 4
// So you would return 4 if given this array.

// BONUS: Add a feature that makes sure the array is large enough before 
//        returning a value, and if it's not, console.log a helpful error message
//        and return null.
// EX: Given the array:
var bonusCaseArray = [11]
// Log to the console "Not enough values", and returns null