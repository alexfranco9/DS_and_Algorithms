//remove array duplicates. Do not alter the
//original array. Return a new array with the values
//in the order they first appear in the original
//[1,2,1,3,4,2] -> [1,2,3,4]

function removeDuplicates(arr){
    let result = [];
    for (let i = 0; i<arr.length; i++){
        if (!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}

console.log(removeDuplicates([1,2,1,3,4,2]));
console.log(removeDuplicates([4,8,4,4,15,4,15,16,23,8,42,4]));

//bonus challenge! remove array duplicates without
//creating a new array
function removeDuplicates2(arr){
    for (let i = 0; i<arr.length; i++){
        for (let j = i+1; j<arr.length; j++){
            if(arr[j] == arr[i]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}

console.log(removeDuplicates2([1,2,1,3,4,2]));
console.log(removeDuplicates2([4,8,4,4,15,4,15,16,23,8,42,4]));

function removeDuplicates3(arr){
    let  dupeObj = {};
    for (let i = 0; i < arr.length; i++) {
        dupeObj[arr[i]] = arr[i]
    }
    return Object.values(dupeObj)
}

console.log(removeDuplicates3([1,2,1,3,4,2]));
console.log(removeDuplicates3([4,8,4,4,15,4,15,16,23,8,42,4]));