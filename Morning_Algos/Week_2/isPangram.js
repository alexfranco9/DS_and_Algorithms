//Is Pangram
//Given a string, return true or false whether or not the string is a pangram
//Pangram: A sentence that contains every letter in the alphabet at least one time
//Ex: The quick brown fox jumps over a lazy dog -> true
//Ex: Sphinx of black quartz, judge my vow -> true
//Ex: Pack my box with five dozen liquor jugs -> true
//Ex: Hello world -> false

function isPangram(str) {
    if(str.length < 26){
        return false
    }
    let alphabet = 
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i].match(/[a-z]/)) {
            for(let j = 0; j < alphabet.length; j++){
                if(alphabet[j] == str[i]) {
                    alphabet.splice(j,1)
                }
            }
        }
    }
    if(alphabet.length == 0) {
        return true
    } 
    else {
        return false
    }
}

console.log(isPangram('The quick brown fox jumps over a lazy dog'))
console.log(isPangram('hello world'))
console.log(isPangram('This is the only one that may work at zoo when you very quick go my fox jumping dancing bouncing'))