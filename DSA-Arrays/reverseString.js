// Create a function that severses a string
// 'Hi my name is Alex' should output 'xelA is eman ym iH'

// First solution
function reverseString(str) {
    const backwards = [];
    const totalItems = str.length - 1;

    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Not a valid input';
    }

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
};

// Second solution
function reverseString2(str) {
    return str.split('').reverse().join('');
};

// Third solution
const reverseString3 = str => str.split('').reverse().join('');

// Fourth solution
const reverseString4 = str => [...str].reverse().join('');

console.log(reverseString('Hi my name is Alex'));
console.log(reverseString2('Hi my name is Alex again!'));
console.log(reverseString3('Hi my name is Alex again more!'));
console.log(reverseString4('Hi my name is Alex again more more!'));