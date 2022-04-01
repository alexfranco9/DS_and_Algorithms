// There are 10 types of people in this world...those who understand binary and those who don't

// Decimal to Binary
// Given a (whole) number, return the value in binary

// Ex: given 109 return "1101101"
// Ex: given 4 return "100"
// Ex: given 21 return "10101"

// Note, typically binary has a leading "0b" in front of binary numbers (ex: "0b1101101") - try to modify your code to account for this after getting it to work

// Binary to Decimal

function binaryToDecimal(bin){
    let result = 0;
    let exp = 0;
    for (let i = bin.length -1; i >=0; i--){
        if(bin[i] !=0){
            result += Math.pow(2, exp)
        }
        exp++
    }
    return result
}
console.log(binaryToDecimal("1101101"));
console.log(binaryToDecimal("100"));
console.log(binaryToDecimal("10101"));

// Decimal to Binary

function decimalToBinary(dec){
    let exp = 0;
    let result = "";
    while(Math.pow(2, exp)  <= dec){
        exp++;
    }
    exp--;
    for(let i = exp; i >= 0; i--){
        if(Math.pow(2,i) <= dec){
            result += "1";
            dec -= Math.pow(2,i);
        }
        else {
            result += "0";
        }
    }
    return result;
}
console.log(decimalToBinary(109));
console.log(decimalToBinary(4));
console.log(decimalToBinary(21));