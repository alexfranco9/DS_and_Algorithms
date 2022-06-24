// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Function Description

// It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// int ar[n]: an array of integers.
// Return

// long: the sum of all array elements.

function aVeryBigSum(nums){
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;
};

console.log(aVeryBigSum([1,2,3]));
console.log(aVeryBigSum([5,25,39,44]));
console.log(aVeryBigSum([99,55,222]));
console.log(aVeryBigSum([10001,10002,10003,10004,10005]));
