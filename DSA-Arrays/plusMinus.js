// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10 to the -4 are acceptable.

// Example:
// arr = [1,1,0,-1,-1]

// There are n = 5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000. Results are printed as:

// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr){
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let n = arr.length;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positive++;
        }
        if(arr[i] < 0){
            negative++;
        }
        else if(arr[i] === 0){
            zero++;
        }
    }
    console.log((positive / n).toFixed(6));
    console.log((negative / n).toFixed(6));
    console.log((zero / n).toFixed(6));
};

plusMinus([-4,3,-9,0,4,1]);