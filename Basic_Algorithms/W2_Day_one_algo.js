// Countdown by Fours
// Print positive numbers starting with 2020, counting down by fours (excluding 0)
//     Challenge:Do this with a FOR loop first and then do it using a WHILE loop afterwards

// 1. Create a for loop.
// 2. Create var i = 2020 which is our starting point, stop when i is >= to 1, then decrement by 4.
// 3. Print positive numbers using console.log.

    for(var i = 2020; i >= 1; i -= 4){
        console.log(i)
    }
// 1. Create a While loop.
// 2. Create variable num = 2020, num >= 1, decrement by 4.
// 3. Print positive numbers using console.log.

var num = 2020;
while (num >= 1){
    console.log(num);
    num-= 4;
}

// Level Up: Flexible Countdown
// Based on Countdown by fours, write a function that, given parameters of "lowNum", "highNum", and "mult", 
// print all multiples of "mult" from "highNum" to "lowNum" using a for loop
// Example: flexCount(2,9,3), it will print 9 6 3 on succesive lines.
// Example: flexCount(2,16,3), it will print 15 12 9 6 3 on succesive lines.

// modulous operator
// 9 % 3 => 0
// 9 % 2 => 1

// PSUDO CODE
// 1. create a function that accepts parameters.
// 2. creat a for loop inside the function that uses those parameters.
// 3. create a var = i and start it at highNum.
// 4. end when i is equal to lowNum.
// 5. generate mult of the mult.
// 6. print out the numbers.

function flexCount(lowNum, highNum, mult){
    for(var i = highNum; i >= lowNum; i--){
        if(i % mult == 0){
            console.log(i)
        }
    }
}
flexCount(2,9,3)


// Sensei Bonus:
// This is based on "Flexible Countdown." The parameter names are not as helpful, but the problem is essentially identical; don't be trown off! 
// Given 4 parameters (param1, param2, param3, param4), print the multiples of param1, starting at param2, and extending to parm3.
// There's one exception: if a multiple is equal to param4, then  skip it (don't print it). Do this using a while loop.
// Example: Given (3,5,17,9), the output should be 6,12,15 on succesive lines, because 6,12, and 15 are multiples of 3, 
// between 5 and 17, and excludes the value of 9.