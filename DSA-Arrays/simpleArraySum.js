// Given an array of integers, find the sum of its elements.
// For example, if the array arr = [1,2,3], 1+2+3 = 6, so return 6.
// Function Description
// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
// simpleArraySum has the following parameter(s):
// arr : an array of integers


function simpleArraySum(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(simpleArraySum([1,2,3]));
console.log(simpleArraySum([1,2,3,4,10,11]));