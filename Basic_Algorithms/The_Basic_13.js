// 1. Print 1-255
// create function print1To255()
// create for loop, var i starts at 1 and ends at 255, increments by 1.
// Print all the integers from 1 to 255.
// call the function for the loop to start.

function print1To255() {
    for (var i = 1; i <= 255; i++)
        console.log(i)
}
print1To255()

// 2. Print Odds 1-255
// create function printOdds1To255()
// crete for loop wiht var i that starts at 0 and ends at 255, increments by 2.
// print all odd integers - console.log(i)
// call the function.

function printOdds1To255() {
    for (var i = 1; i <= 255; i = i + 2) {
        console.log(i)
    }
}
printOdds1To255()

// create for loop 
// create if statement with modulus value of i % 2 != 0 
// if the value of i is modulus of 2 than print console.log(i)

function printOdds1To255() {
    for (var i = 1; i <= 255; i++) {
        if (i % 2 != 0)
            console.log(i)
    }
}
printOdds1To255()

// 3. Print Ints and Sum 0-255
// create function 
// create a variable for sum in between function and for loop.
// create for loop, var i starts at 0 and ends at 255, increments by 1.
// print all integers from 0-255 - console log(i)
// add the value of i + var sum
// print the valu of sum so far - console.log(sum)
// call the function for the loop to start.

function printIntsAndSum0To255() {
    var sum = 0;
    for (var i = 0; i <= 255; i++) {
        console.log(i)
        sum = sum + i
        console.log(sum)
    }
}
printIntsAndSum0To255()


// 4. Iterate and Print Array
// create an Array with values
// create a function printArrayVals()
// create a for loop that traverses through every value in the array.
// set for loop to have var i start at 0 and end at length of the array, and increment by 1.
// print the value of index in the array - console.log(arr[i])
// start the function.

var myArray = [2, 4, 6, 8, 10, 12]

function printArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
printArrayVals(myArray)

// 5. Find and Print Max
// create an Array with values.
// create a function printMaxOfArray(arr).
// create a varaible to keep track of max value in the array.
// create a for loop that traverses through the array.
// set the for loop to have var i start at 0, and end at length of the array, increment by 1.
// create an if statement comparing the value of the index to the value of the var max, if it is greater than the current value of max set it to be the new value for max.
// after the loop is done running print current value of max, which should print the max value in the array.


var myArray = [2, 4, 6, 8, 22, 10, 12]

function printMaxOfArray(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }

    }
    console.log(max)
}
printMaxOfArray(myArray)

// 6. Get and Print Average.
// create a function that accepts an array, printAverageOfArray(arr)
// create a variable, total of all the values in the array.
// create a variable, average - so divide the total by the arr.length.
// create a for loop that traverses every value in the array.
// variable total keeps adding every index in the array.
// once the loop is done going through every value in the array var average will be total divided by the array length.
// print the average of the values in the array.

var myArray = [2, 4, 6, 8, 22, 10, 12]

function printAverageOfArray(arr) {
    var total = 0
    var average = 0
    for (var i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }
    average = total / arr.length;
    console.log(average)
}
printAverageOfArray(myArray)


// 7. Array with Odds.
// create a function 
// create a var array and leave it empty, it will accepts the new odd values.
// create a for loop that traverses through the array.
// starts at 1 and ends at 255, increments by 2.
// set the push method to add the odd values in the array.
// one the loop is done, we can print the array with the odd vaules in it.


function printOdds1To255() {
    var arr = []
    for (var i = 1; i <= 255; i = i + 2) {
        arr.push(i)
    }
    console.log(arr)
}
printOdds1To255()

// 8. Square the Values.
// create a function that accepts an array.
// create a for loop that starts at 0 ends at the array length, increments by 1.
// print the the value of index squared.
// print the values of the array after squared with the new values.

function squareArrayVals(arr){
    for(var i = 0; i <= arr.length; i++){
        console.log(arr[i] * arr[i])
    }
}
var arr1 = [0,1,2,3,4,5,6]
squareArrayVals(arr1)

// 9. Greater than Y.
// create a function that accepts an array.
// create a variable to count values greater than Y.
// create a for loop that starts at 0 ends at the array length, increments by 1.
// create an if statement that saves the values greater than Y.
// print the values greater than Y.

function returnArrayCountGreaterThanY(arr, y){
    var greaterThanY = 0
    for(var i = 0; i <= arr.length; i++){
        if(arr[i] > y){
            greaterThanY = greaterThanY + 1
        }
    }
    console.log(greaterThanY)
}

var arr1 = [1, 3, 5, 8, 9, 12, 22, 33, 16]
var y = 2

returnArrayCountGreaterThanY(arr1, y)

// 10. Zero Out Negative Numbers.
// create a function that accepts an array.
// create a for loop that starts at 0 ends at the array length, increments by 1.
// create if statement if arr value is a negative number than make 0.
// return the array after setting negative values to 0.

function zeroOutArrayNegativeVals(arr){
    for(var i = 0; i <= arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    console.log(arr)
}

var arr1 = [1, -9, -8, -7, 2, 2]
zeroOutArrayNegativeVals(arr1)