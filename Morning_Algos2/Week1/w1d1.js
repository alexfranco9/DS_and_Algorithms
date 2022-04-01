//write a function that returns whether the given array
//has a balance point between indices, where one side's
//sum is equal to the other's
//note: the array is unsorted
//[1,2,3,4,10] -> true (point is between 4 and 10)
//[1,2,4,2,1] -> false
//[-2,-6,-8] -> true

function balancePoint(arr){
    let leftSum = 0;
    let rightSum = 0;
    //let right half be sum of all values in arr
    for(let i = 0; i < arr.length; ++i){
        rightSum += arr[i];
    }

    for(let i = 0; i < arr.length - 1; ++i){
        leftSum += arr[i];
        rightSum -= arr[i];
        console.log(`left: ${leftSum}, right: ${rightSum}`);

        if(leftSum === rightSum){
            return true;
        }
    }
    return false;
            
}

console.log(balancePoint([1,2,3,4,10]));
console.log(balancePoint([1,2,4,2,1]));
console.log(balancePoint([-8,-6,-2]));



//Here, a balance point is ON an index, not between indices
//Return the balance index where sums are equal on both
//sides (exclude the point's own value).
//Return -1 if none exist.
// [-2,5,7,0,3] -> 2
//[9,9] -> -1

function balanceIndex(arr){
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++){
        let rightSum = 0;
        for(let j = i+1; j<arr.length; j++){
            rightSum += arr[j];
        }
        if(leftSum == rightSum){
            return i
        }
        leftSum += arr[i];
    }
    return -1
}


console.log(balanceIndex([-2,5,7,0,3]));
console.log(balanceIndex([9,9]));