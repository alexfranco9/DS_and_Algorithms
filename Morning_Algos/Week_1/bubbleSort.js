//Bubble Sort
//Given an array of numbers, sort the numbers by swapping adjacent values that are in the wrong order
//Ex:
//[5,9,2,7,6] -> [5,2,7,6,9] -> [2,5,7,6,9] -> [2,5,6,7,9]
//Image: https://miro.medium.com/max/776/1*7QsZkfrRGhAu5yxxeDdzsA.png

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j+1]){
                temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
//Test log
console.log(bubbleSort([3,9,7,2,5]))
console.log(bubbleSort([8,5,3,7,9,1]))
console.log(bubbleSort([6,5.5,3,7,5,9,1]))

//Selection Sort
//Given an array of numbers, sort the numbers by finding the smallest number in the array and moving it to the beginning. Then iterate through everything except the first number, which is now sorted, and find the next smallest value and move it to index 1. Keep doing this until all values are sorted. 
//Ex:
//[7,5,2,8,4] -> [2,7,5,8,4] -> [2,4,7,5,8] -> [2,4,5,7,8]
//Image: https://www.w3resource.com/w3r_images/selection-short.png

function selectSort(arr){
    for(let i = 0; i < arr.length-1; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        var temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}
//Test log
console.log(selectSort([5,9,5,3,1,2]))
console.log(selectSort([4,9,5,3,6,2,7]))