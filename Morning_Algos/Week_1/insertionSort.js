//Insertion Sort
// Given an array of numbers, sort the numbers by placing values into their correct position at the front (sorted part) of the array
// Ex:
// [9,5,2,7,1] -> [5,9,2,7,1] -> [2,5,9,7,1] -> [2,5,7,9,1] -> [1,2,5,7,9]

function insertSort(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i-1]){
            //if # is suppose to go inside the sorted section 
            for(let j = i - 1; j >= 0; j--){
                if(arr[j] > arr[j+1]){
                    console.log(`swapping ${arr[j+1]} and ${arr[j]}`);
                    [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
                }
            }

        }
    }
    return arr 
}

console.log(insertSort([5,3,2,7,8,4]))
console.log(insertSort([9,5,2,7,1]))