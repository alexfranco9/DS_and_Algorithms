//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
//If result is not shorter(such as "bb"->"b2"), return the original string("bb")

const encode = (str) => {
    let counter = 1;
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            counter += 1;
        }
        else {
            answer += str[i] + counter;
            counter = 1;
        }
    }
    return answer;
}
console.log(encode("aaabbcccc"));
console.log(encode("ddddeeeeeffggggxxxxxxxx"));
console.log(encode("aaaaabbbbbbbc"));
console.log(encode("bb"));


//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//special note: can your function handle "g14f12"?

const decode = (str) => {
    let newAns = "";
    for (let i = 0; i < str.length; i++) {
        let num = "";
        let n = 1;
        while (!isNaN(str[i + n])) {
            num += String(str[i + n]);
            n++;
        }
        for (let j = 1; j <= num; j++) {
            newAns += str[i];
        }
        i += n - 1;
    }
    return newAns;
}
console.log(decode("a3b2c4"));
console.log(decode("t2h10j4x25"));