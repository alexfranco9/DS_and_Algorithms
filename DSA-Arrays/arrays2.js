const strings = ['a', 'b', 'c', 'd'];

//access 
strings[2] // O(1) Here we are accessing index 2 which will return c

//push
strings.push('e'); // O(1)

//pop
strings.pop(); // O(1)

//unshift
strings.unshift('x'); // O(n)

//splice
strings.splice(2, 0, 'alien'); // O(n)

console.log(strings);