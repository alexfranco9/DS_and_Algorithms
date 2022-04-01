//Given a sorted array and a value, return whether the
//array contains that value. Do not sequentially iterate
//the array. Instead, 'divide and conquer', taking
//advantage of the fact that the array is sorted.
//try not to use built in functions, if you have to then so be it

function binarySearch(arr, num){
    //if empty array, return false
    if(arr.length === 0) return false;

    //find middle point
    let mid = Math.floor(arr.length/2);

    //if middle point === num, return true
    if(arr[mid] === num) return true;

    //else if single digit array, return false

    let half = [];
    if(arr[mid] > num){
        //left half
        half = arr.slice(0, mid);
    }
    else{
        //right
        half = arr.slice(mid + 1, arr.length);
    }
    console.log(half);

    return binarySearch(half, num);
}

console.log(binarySearch([5], 22));
console.log(binarySearch([0,1,2,3,4,8,15,16,23,42,108,109,115,122,241,298,500], 500));
console.log(binarySearch([0,1,2,3,4,8,15,16,23,42,108,109,115,122,241,298,500], 3));
console.log(binarySearch([0,1,2,3,4,8,15,16,23,42,108,109,115,122,241,298,500], 157));
console.log(binarySearch([0,1,2,3,4,8,15,16,23,42,108,109,115,122,241,298], 122));
console.log(binarySearch([15], 15));