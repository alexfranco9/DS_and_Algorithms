// Hexadecimal to Decimal
// Given a hexadecimal string, return the number it equates to
// Ex: Given 1C return 28
// Ex: Given 93E88 return 605832
// Ex: Given FF return 255
// Ex: Given FFDAB9 return 16767673, then look up FFDAB9

function hexToDec(hex){
    let exp = 0;
    let result = 0;
    let key = {A: 10, B: 11, C: 12, D: 13, E: 14, F: 15}
    for(let i = hex.length - 1; i >= 0; i--){
        let num = hex[i];
        result += Math.pow(16, exp) * (isNaN(num) ? key[num] : num);
            exp++;
    }
    return result;
}
console.log(hexToDec("1C"));
console.log(hexToDec("93E88"));
console.log(hexToDec("FF"));
console.log(hexToDec("FFDAB9"));

// Decimal to Hexadecimal
// Given a number, convert it to hexadecimal
// Ex: given 28 return 1C
// Ex: given 605832 return 93E88
// Ex: Given 255 return FF

function decToHex(dec) {
    let result = "";
    const hexChars = '0123456789ABCDEF';
    let isNeg = false;
        if (dec < 0) {
            isNeg = true;
            dec = -dec
            }
        while (dec > 0) {
            let r = dec%16;
            dec = (dec - r)/16;
            result = hexChars[r] + result;
        }
    return (isNeg ? '-'+result : result);
}
        
console.log(decToHex(28));
console.log(decToHex(605832));
console.log(decToHex(255));
