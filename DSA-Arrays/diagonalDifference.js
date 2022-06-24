// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1+5+9 = 15. The right to left diagonal = 3+5+9 = 17. Their absolute difference is 15-17 = 2.

// Function description

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference

function diagonalDifference(arr){
    let n = arr[0].length;
    let leftSum = 0;
    let rightSum = 0;

    for(let i = 0, j = n -1; i < n; i++, j--){
        leftSum += arr[i][i];
        rightSum += arr[i][j];
    }
    let difference = leftSum - rightSum;
    return Math.abs(difference);
};

console.log(diagonalDifference([[1,2,3], [4,5,6], [9,8,9]]));
console.log(diagonalDifference([[11,2,4], [4,5,6], [10,8,-12]]));