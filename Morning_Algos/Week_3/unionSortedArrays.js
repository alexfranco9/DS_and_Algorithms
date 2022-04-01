// Union sorted arrays
// Given two arrays, create a union of the two. If you encounter duplicates, only include the greatest number of duplicates from one array. (Ex, if array1 has four 4's and array2 has two 4's, the result array should only have four 4's, NOT 6)
// Ex: given [1,2,2,3,4] and [1,2,5,7] return [1,2,2,3,4,5,7] 
// Ex: given [2,3,4,4,6] and [1,2,4,4,4,4,7] return [1,2,3,4,4,4,4,6,7] 

function unionSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while( i < arr1.length && j < arr2.length){
        if( arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }
        else if(arr2[j] < arr1[i]){
            result.push(arr2[j])
            j++
        }
        else {
            result.push(arr1[i])
            i++
            j++
        }
    }
    if(i < arr1.length){
        for( let k = i; k < arr1.length; k++){
            result.push(arr1[k]);
        }
    }
    if(j < arr2.length){
        for(let k = j; k < arr2.length; k++){
            result.push(arr2[k])
        }
    }
    return result
}

console.log(unionSortedArrays([1,2,2,3,4], [1,2,5,7]))
console.log(unionSortedArrays([2,3,4,4,6], [1,2,4,4,4,4,7]))