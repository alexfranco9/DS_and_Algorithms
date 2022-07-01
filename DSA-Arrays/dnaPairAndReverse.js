// Reverse the DNA strand and then return its complement.


function dnaPair(str){
    let reverse = [];
    let dnaMap = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };

    for(let i = str.length - 1; i >= 0; i--){
        reverse.push(str[i]);
    }
    return reverse.map(c => dnaMap[c]).join("");
};



console.log(dnaPair("GTAC")); // Reversed "CATG" Return Complementary "GTAC"
console.log(dnaPair("GAATTCGAT")); // Reversed "TAGCTTAAG" Return complement "ATCGAATTC"
console.log(dnaPair("AAAAAA")); 