//1.
// generateCoinChange(input)
// input is an integer representing an amount of money
// output is an object representing the most optimal
// (i.e. fewest coins) way to represent that amount
// with standard U.S. coins
// if the input is 74 cents, the output would be:
// {quarters: 2, dimes: 2, nickels: 0, pennies: 4}
// if the input is 109 cents, the output would be:
// {quarters: 4, dimes: 0, nickels: 1, pennies: 4}
// strong suggestion: do not try to use like, decimal numbers
// note: if your input is 74, your output should be
// {quarters: 2, dimes: 2, nickels: 0, pennies: 4}
// if it's something like:
// {quarters: 2, dimes: 7, nickels: 14, pennies: 74}
// you have made a mistake somewhere

// function generateCoinChange(input) {
//     var output = {quarters: 0, dimes: 0, nickels: 0, pennies: 0}

//     return output
// }


function generateCoinChange(input) {
    var output = {}

    output.quarters = Math.floor(input/25)
    var remainder = input % 25
    output.dimes = Math.floor(remainder/10)
    remainder = remainder % 10
    output.nickels = Math.floor(remainder/5)
    remainder = remainder % 5
    output.pennies = remainder
    return output
}

console.log(generateCoinChange(127))
console.log(generateCoinChange(54))
console.log(generateCoinChange(67))
console.log(generateCoinChange(23))


// 2.
// generateCoinChangeWithGivenValues(input, values)
// input is an integer representing an amount of money
// values is an array of arrays - each array represents a
// denomination of currency (string) and its value (integer)
// (a denomination of 1 will always be present)
// that array is in order of denomination
// the output is an object representing the most optimal
// way to represent that amount given the denominations
// if the input is 127 cents, and the values are:
// [ ['metadime', 15],
//  ['supernickel', 6]
//  ['very regular penny', 1]]
// the output would be:
// {metadimes: 8, supernickels: 1, very regular pennys: 1}
// (note the pluralization)
// if the input was 127, but the values were:
// [ ['halfquarter', 12],
//  ['greater nickel', 8],
//  ['lesser dime', 3]
//  ['just-a-penny', 1]]
// the output would be:
// {halfquarters: 10, greater nickels: 0, lesser dimes: 2, just-a-pennys: 1}
// (these values -could- be an object, but I want to get you used to
// the concept of arrays within arrays and accessing that data)
//
// bonus: what would you do if we couldn't guarantee a denomination of 1
// being present? there are a few different answers, none of them right.
// the choice... is yours.

function generateCoinChangeWithGivenValues(input, values) {
    // create some kind of object for output here
}


var values_a = [['dollars', 100], ['half-dollar', 50], ['quarters', 25], ['dimes', 10], ['nickels', 5], ['pennies', 1]];
console.log(generateCoinChangeWithGivenValues(109, values_a));
var values_b= [['dollars', 100], ['half-dollar', 50], ['nickels', 5], ['pennies', 1]];
console.log(generateCoinChangeWithGivenValues(226, values_b));