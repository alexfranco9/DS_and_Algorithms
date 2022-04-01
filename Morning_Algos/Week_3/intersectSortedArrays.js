// Intersect sorted arrays
// Given two arrays of sorted numbers, return a new array that contains only the numbers that are in both arrays - do NOT count duplicates
// Ex: given [1,2,2,3,4,5] and [2,4,6,7,8] return [2,4]
// Ex: given [1,1,1,2,3,4] and [1,1,3,4,5] return [1,3,4]

function intersectSortedArrays(arr1, arr2) {
    var result = []
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                let found = false;
                for(let k = 0; k < result.length; k++){
                    if(result[k] == arr1[i]){
                        found = true;    
                    }
                }
                if(found == false){
                    result.push(arr1[i])
                }
            }
        }
    }
    return result
}

console.log(intersectSortedArrays([1,2,2,3,4,5], [2,4,6,7,8]))
console.log(intersectSortedArrays([1,1,1,2,3,4], [1,1,3,4,5]))