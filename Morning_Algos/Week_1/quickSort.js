//Quick sort 
// Use the ideas from partition to create a quick sort. Basically, run partitions until an array is completely sorted
// Partition: given an array and a pivot index, roughly sort the array around the value at the original pivot point (does not fully sort the array, only sorts the numbers relative to the pivot)

const partition = (arr, pivot) => {
    for (let i = arr.length; i>=0; i--){
        for (let j = 0; j < arr.length; j++){
            if (j < pivot){
                if (arr[j] > arr[pivot]){
                    [arr[j],arr[pivot]] = [arr[pivot],arr[j]];
                    pivot = j;
                }
            }
            if (j > pivot){
                if (arr[j] < arr[pivot]){
                    [arr[pivot],arr[j]] = [arr[j],arr[pivot]];
                    pivot = j;
                }
            }
        }
    }
    return arr
}

function quickSort(arr){
    for(let i = 0; i < arr.length; i++){
        partition(arr, i)
    }
    return arr;
}

console.log(partition([7, 9, 1, 6, 2, 10, 8, 4, 3, 5], 3));
console.log(quickSort([7, 9, 1, 6, 2, 10, 8, 4, 3, 5]))
console.log(quickSort([16, 7, 9, 1, 6, 2, 10, 8, 4, 3, 5, 22,]))