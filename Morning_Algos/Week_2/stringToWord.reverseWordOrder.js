//String to Word Array
// Given a string, return an array with each individual word in it
// Ex: Given "Hello World" return ["Hello", "World"]
// Ex: Given "Happy Monday everyone" return ["Happy", "Monday", "everyone"]

function stringToWord(str) {
    var arr = [];
    var tempword = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            tempword += str[i]
        }
        else {
            arr.push(tempword);
            tempword = "";
        }
    }
    arr.push(tempword);
    return arr
}

console.log(stringToWord("Happy Monday everyone"))
console.log(stringToWord("Lets learn some JavaScript"))


//Reverse Word Order
// Given a string, return a new string that has all the words reversed (NOT the letters)
// Ex: Given "Hello World" return "World Hello"
// Ex: Given "Happy Monday everyone" return "everyone Monday Happy"

function reverseWordOrder(str) {
    let newString = "";
    let tempWord = stringToWord(str);
    for (let i = tempWord.length - 1; i >= 0; i--) {
        newString += tempWord[i] + " ";
    }
    return newString;
}

console.log(reverseWordOrder("Happy Monday everyone"))
console.log(reverseWordOrder("Lets learn some JavaScript"))
