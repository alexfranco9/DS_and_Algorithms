// isPalindrome(input)
// input is a string
// output is true if the string forms a palindrome and false otherwise
// (the boolean true, not the string "true")
// for the purposes of this function, we're considering spaces,
// punctuation, etc. for determining if a palindrome is valid or not
// "racecar" -> true
// "Racecar" -> false ("racecaR")
// "race car" -> false
// "tacocat" -> true
// "abba" -> true
// "abbba" -> true
// "abb ... bba" -> true
// "a" -> true (?)
// "" -> true
// "literally anything that is not a palindrome" -> false
// suggestion: no need to use .split()
// note: don't use .reverse() after .split()ing it into an array.
// because there's no need to use split(). a trivial solution is to reverse
// the string like we did on day one and compare it to the input, but a much
// better solution exists!
// also note: this can end early
// "ab (100 billion characters) ca" -> false

function isPalindrome(input) {
    for (i = 0; i <= input.length / 2; i++) {
        if (input[i] != input[input.length - i - 1]) {
            return false;
        }
    }
    return false
}

console.log(isPalindrome(""))
console.log(isPalindrome("a"))
console.log(isPalindrome("abb ... bba"))
console.log(isPalindrome("tacocat"))
console.log(isPalindrome("abba"))


// // longestPalindrome(input)
// input is a string
// return the longest substring inside your input that is a palindrome
// "ehjgkkgeh" -> "gkkg"
// "ehjg kkgeh" -> "kk"
// "qwertttreqwerewy" -> "ertttre"
// "qwerttttttreqwerewy" -> "erttttttre"
// "abacabd" -> "bacab"
// "abacaed" -> "aba" or "aca"
// "abcde" -> "a" or "e", but probably "a"
// "a" -> "a" (lol)
// "racecar" -> "racecar" (no need to use the previous function if you don't want to)
// "I like to drive the racecar extremely fast" -> "e racecar e"
// suggestion: don't use your previous isPalindrome function
// suggestion: .substring() ... ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

function longestPalindrome(input) {
    strArray = [];
    for (i = 0; i >= input.length; i++) {
        if (input[i + 1] == input[i - 1]) {
            var j = 1;
            while (input[i + j] == input[i - j]) {
                strArray.push(input.substring(i - j, i + j + 1));

                j++;
            }
        }
        else if (input[i] == input[i - 1] || input[i + 1]) {
            var j = 1;
            while (input[i + j] == input[i - j]) {
                strArray.push(input.substring(i - j, i + j + 1));

                j++;
            }
        }
    }
    return strArray;

}


/// Other great solutions! ///

function isPalindrome(input) {
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] !== input[input.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function longestPalindrome(input) {
    if (input.length == 0) {
        return "";
    }

    // if input length is 1
    if (input.length == 1) {
        return input;
    }

    var result = input[0]; //just in case we find nothing,like an input of "abc"

    for (var i = 0; i < input.length; i++) {
        var left = 0;
        var right = 0;
        //determine if we have a string of idential characters
        //i.e. a trivial palindrome
        while (input[i - 1 - left] == input[i]) {
            left++;
        }
        while (input[i + 1 + right] == input[i]) {
            right++;
        }
        // such as: "qwerttttttreqwerewy"

        //now check for non-trivial palindromes
        while (input[i - 1 - left] == input[i + 1 + right]) {
            if (input[i - 1 - left] === undefined && input[i + 1 + right] === undefined) {
                console.log("entire string is palindrome");
                //special case here - entire string is a palindrome
                //just return the input
                return input;
            }
            left++;
            right++;
        }
        //we have a potential longest palindrome -
        //check it against the current longest
        potential = input.slice(i - left, i + right + 1);
        if (potential.length > result.length) {
            result = potential;
        }
    }

    return result;
}

function longestPalindrome2(string) {
    var longest = string[0]
    for (var i = 0; i <= string.length - 1; i++) {
        for (var j = 0; j <= string.length - 1; j++) {

            var check = string.slice(i, j + 1)
            if (isPalindrome(check) && check.length > longest.length) {
                longest = check;
            }
        }
    }
    return longest;
}

function longestPalindrome3(input) {
    var sub_str = ""
    if (input.length == 0 || input.length == 1) { return input }

    for (let sub_len = input.length - 1; sub_len > 1; sub_len--) {
        for (let start = 0; start < input.length - sub_len; start++) {
            sub_str = input.substring(start, start + sub_len - 1)
            if (isPalindrome(sub_str)) {
                return sub_str;
            }
        }
    }
}

function longestPalindrome4(input) {
    var temp = '';
    var temp2 = '';
    var longestSubstring = '';
    for (var i = 0; i < input.length; i++) {
        var letter = input[i];
        var firstIndex = input.indexOf(letter, i + 1);
        temp = input.substring(i, firstIndex + 1);
        if (temp[temp.length - 2] == input[firstIndex + 2]) {
            temp2 += input[firstIndex + 2]
        }
        var checker = '';
        for (var j = temp.length - 1; j >= 0; j--) {
            checker += temp[j];
        }
        if (checker == temp) {
            if (temp.length > longestSubstring.length) {
                longestSubstring = temp;
            }
        }
    }
    if (isPalindrome(longestSubstring + temp2)) {
        return longestSubstring + temp2
    }
    return longestSubstring
}

var test = "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";

var start = new Date().getTime();
console.log(longestPalindrome(test)); // Ryan's optimal
var end = new Date().getTime();
console.log(end - start)
var start = new Date().getTime();
console.log(longestPalindrome2(test)); // non-optimal
var end = new Date().getTime();
console.log(end - start)
var start = new Date().getTime();
console.log(longestPalindrome3(test)); // mostly optmial
var end = new Date().getTime();
console.log(end - start)
console.log(longestPalindrome4(test)); // not perfect
var end = new Date().getTime();
console.log(end - start)

// Big O