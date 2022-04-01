/*
Joe drives a taco truck in the booming town of Squaresburg.
He uses an array of [x,y] coordinates corresponding to
locations of his customers. They walk to his truck, but he
is fair-minded so he wants to minimize total distance from
truck to customers. City blocks are perfect squares, and
every street is two-way, at right angles. He only parks by
street corners(coordinates like [37,-16]). Customers only
travel on streets: coordinate [2,-2] is distance 4 from [0,0].
Joe checks the array before deciding where to park. Given a
customer coordinate array, return an optimal taco truck
location.
given [[10,0],[-1,-10],[2,4]]
return [2,0] as total distance is 25(8+13+4)
*/

function selectSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        minIdx = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}


function tacoTruck(customerArr){
    //get median of x coordinates, then get median of y coordinates

    let allX = [];
    let allY = [];
    //put all the x coordinates in an array
    //put all the y coordinates in an array
    for(let i = 0; i < customerArr.length; ++i){
        allX.push(customerArr[i][0]);
        allY.push(customerArr[i][1]);
    }
    
    //sort both arrays
    allX = selectSort(allX);
    allY = selectSort(allY);

    // console.log(allX);
    // console.log(allY);

    //grab middle number from x array, middle number from y array
    return [allX[Math.floor(allX.length/2)], allY[Math.floor(allY.length/2)]];

}

console.log(tacoTruck([[10,0],[-1,-10],[2,4]]));
console.log(tacoTruck([[3,1],[-1,2],[0,0]]));


console.log(tacoTruck([[10,0],[-1,-10],[2,4]]));
console.log(tacoTruck([[3,1],[-1,2],[0,0]]));

