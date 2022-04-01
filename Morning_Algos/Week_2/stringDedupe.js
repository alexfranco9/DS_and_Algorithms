//String dedupe
// Given a string, return a new string that has all duplicate letters removed -- do not count capital and lowercase as duplicates
// Ex: given: "Alabama" return "Alabm"
// Ex: given: "It's time to duel!" return "It's imeodul!" (notice a space was also counted as a letter)

function stringDedupe(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (!newStr.includes(str[i])) {
            newStr += str[i]
        }
    }
    return newStr
}

console.log(stringDedupe("Alabama"))
console.log(stringDedupe("It's time to duel!"))
console.log(stringDedupe("IaaaaiitD's taaaTimeeee tooooT Ddueeel!"))


// Without using built it method .includes //
console.log("**********************************************************")

const strDedupe = string => {
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] == string[j]) {
                string = string.slice(0, j) + string.slice(j + 1, string.length);
                i--
            }
        }
    }
    return string
}

console.log(strDedupe('Alabama'))
console.log(strDedupe("It's time to duel!"))
console.log(strDedupe("IaaaaiitD's taaaTimeeee tooooT Ddueeel!"))

// Just another solution //
console.log("************************************************************")

function removeDuplicate(str, n) {
    // Used as index in the modified string
    var index = 0;

    // Traverse through all characters
    for (var i = 0; i < n; i++) {

        // Check if str[i] is present before it
        var j;
        for (j = 0; j < i; j++) {
            if (str[i] == str[j]) {
                break;
            }
        }

        // If not present, then add it to
        // result.
        if (j == i) {
            str[index++] = str[i];
        }
    }

    return str.join("").slice(str, index);
}

// Driver code
var str = "geeksforgeeks".split("");
var n = str.length;
console.log(removeDuplicate(str, n));