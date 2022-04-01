// Array Partition
// Given an array of unsorted numbers and a pivot index, sort the array so that all values less than the value at the pivot index are on the left of the value and all values greater than the pivot value are on the right
// Ex: 
// Given var sortArr = [7,9,1,6,2,10,8,4,3] and a pivot index of 3, return [1,2,4,3,6,9,7,10,8]
// Notice how the pivot index of 3 lands on the value of 6 originally and then sorts all numbers in the array around being less than or greater than the number 6
// It is OKAY for the pivot to move, just keep track of the original VALUE of the pivot
// Starter code:

// This function is not fully working!
function partition1(arr, pivot) {
    for (let i = 0; i < arr.length; i++) {
        // The value is smaller, but the pivot is bigger
        if (arr[pivot] > arr[i] && pivot < i) {
            let j = i;
            while (pivot < j) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                j--;
            }
            pivot++;
        }
        else if (arr[pivot] < arr[i] && pivot > i) {
            let j = i;
            while (pivot > j) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                j++;
            }
            pivot--;
        }
    }
    return arr;
}

// This function works best!
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

console.log(partition1([7, 9, 1, 6, 2, 10, 8, 4, 3], 3));
console.log(partition([7, 9, 1, 6, 2, 10, 8, 4, 3], 3));