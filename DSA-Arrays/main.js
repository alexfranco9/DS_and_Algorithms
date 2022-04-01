// const nemo = ['nemo'];

// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank', 'more'];

// const large = new Array(100).fill('nemo');

// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found Nemo!');
//       break;
//     }
//   }
// }

// findNemo(large); // Big-O is O(n) --> Linear Time, it grows linear as the number of inputs grow. More input means more operations. Loops are Linear Time.

// 0(1) --> Constant Time 

// const boxes = [0,1,2,3,4,5];

// function logFirstTwoBoxes(boxes) {
//     console.log(boxes[0]); // 0(1) one operation
//     console.log(boxes[1]); // 0(2) one operation
// }

// logFirstTwoBoxes(boxes) // O(2) total of two operations everytime, not matter how many inputs in the array.

// Challenge, not a typical interview question but good to see. 

// function funChallenge(input) {
//     let a = 10; // O(1)
//     a = 50 + 3; // O(1)

//     for (let i = 0; i < input.length; i++) { // O(n) Loops are Linear Time.
//         anotherFunction(); // O(n)
//         let stranger = true; // O(n)
//         a++; // O(n)
//     }
//     return a; // O(1)
// }

// funChallenge();

// This is Big O(3 + 4n) or really just O(n) 

// Another challenge.

// function anotherFunChallenge(input) {
//     let a = 5; // O(1)
//     let b = 10; // O(1)
//     let c = 50; // O(1)
//     for (let i = 0; i < input; i++) { // O(n)
//       let x = i + 1; // O(n)
//       let y = i + 2; // O(n)
//       let z = i + 3; // O(n)
  
//     }
//     for (let j = 0; j < input; j++) { // O(n)
//       let p = j * 2; // O(n)
//       let q = j * 2; // O(n)
//     }
//     let whoAmI = "I don't know"; // O(1)
//   }

  // Big O(4 + 7n) it really is just O(n)

  // **************************** //

  // Time Complexity //

  // Find 1st, and find Nth..

  // const array = ['hi', 'my', 'teddy'];
  // array[0]; // O(1)
  // array[array.length-1] // O(1)

  // 2 parameters - arrays - no size limit
  // return true or false

  const array1 = ['a', 'b', 'c', 'x', 't'];
  const array2 = ['z', 'r', 'j', 'l'];

  function containsCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          console.log('True');
          return true;
        }
      }
    }
    console.log('False');
    return false;
  }

  containsCommonItem(array1, array2); // this is Big O(a*b)

  function containsCommonItem2(arr1, arr2){
    // loop through first array and create object where properties === itesm in the array
    // can we assume always 2 params?

    let map = {};
    for (let i = 0; i < arr1.length; i++) {
      if(!map[array1[i]]) {
        const item = array1[i];
        map[item] = true;
        console.log(map);
      }
    }

    // loop through sencond array and check if item in the sencond array exists on created object.

    for (let j = 0; j < arr2.length; j++) {
      if (map[array2[j]]) {
        console.log('true');
        return true;
      }
    }
    console.log('false');
    return false;
  }

  containsCommonItem2(array1, array2);

  function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
  }

  containsCommonItem3(array1, array2);