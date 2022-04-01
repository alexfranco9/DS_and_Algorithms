// Always Hungry

// Create a function that accepts an array, and prints "yummy" 
// each time one of the values is equal to "food". If no array 
// elements are "food", then print "I'm hungry" once.

// Ex: Given array [1, 4, "food", "hello", true, "food"]
// Output:
// yummy
// yummy
// -----------------------
// Ex: Given array [2, true, 5, "hello", 8, "four"]
// Output:
// I'm hungry

// 1. create a function that accepts an array.
// 2. create a foor loop that traverses each value in the array.
// 3. if value in the array is found as food than print "yummy"
// 4. start the function. 

var arr1 = [1, 4, "food", "hello", true, "food"]
var arr2 = [2, true, 5, "hello", 8, "four"]

function foodCheck(arr){
    var foodCount = 0
    for(var i = 0; i <= arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy")
            foodCount++;
        }
    }
        if(foodCount == 0){
            console.log("I'm hungry")
        }
}
foodCheck(arr1)