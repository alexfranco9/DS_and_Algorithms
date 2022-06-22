const strings= ['a', 'b', 'c', 'd', 'e', 'f'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

strings[1] // Accessing the array elements is O(1)

// push, Add one or more elements to the end of the array.
strings.push('aa'); // O(1)

// pop, Remove the last element from the array.
strings.pop(); // O(1)

// shift, Remove the first element from the array.
strings.shift();

// unshift
strings.unshift('x'); // O(n)

// splice, Starting at the index specified by the first parameter, remove the number of elements specified by the second parameter and then add elements to the array for all remaining parameters at the index specified by the first parameter.
strings.splice(2, 0, 'alien'); // O(n)

// join, Combine each element of the array into a string with the value passed to join placed between each value.
console.log(strings.join(", "));

// reverse, Reverse the order of the elements in an array.
strings.reverse();

// slice, Copy part of an array starting at the index of the first parameter and stopping at the index of the second parameter, but not including the last index.
console.log(strings.slice(1, 3));

// concat, Concatenate the array passed to concat to the end of the array.
console.log(strings.concat(['y', 'z']));

console.log(strings);