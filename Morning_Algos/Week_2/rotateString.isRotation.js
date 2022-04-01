//String Rotation
// Given a string and a number, rotate a string by that number
// Ex: Given RotateString("Hello World",3) return "rldHello Wo"
// Ex: Given RotateString("Rotated",4) return "atedRot"

function rotateString(str, n) {
    let temp = "";
    for(let i = str.length-n; i < str.length; i++){
        temp += str[i]
    }
    for(let j = 0; j < str.length-n; j++){
        temp += str[j]
    }
    return temp
}

console.log(rotateString("Hello World", 3))
console.log(rotateString("Rotated", 4))
console.log(rotateString("Welcome to JavaScript", 5))

//Is Rotation
// Conversely, given a string and a possibly rotated string, return true or false whether the second string is a rotation of the first
// Ex: given isRotation("Hello World", "rldHello Wo"), return true
// Ex: given isRotation("Hello", "World"), return false

function isRotation(str1, str2) {
    for(let i = 0; i < str1.length; i++){
        if(rotateString(str1, i).toLowerCase() === str2.toLowerCase()){
            return true;
        }
    }
    return false;
}

console.log(isRotation("Hello World", "rldHello Wo"))
console.log(isRotation("Rotated", "atedRot"))
console.log(isRotation("Hello", "World"))
console.log(isRotation("Hello", "world"))
console.log(isRotation("Welcome to JavaScript", "criptWelcome to JavaS"))