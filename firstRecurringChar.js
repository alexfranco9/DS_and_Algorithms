
function firstRecurringCharacter(input) {
    let map = {};
    for ( let i = 0; i < input.length; i++ ) {
        if (map[input[i]]) {
            return input[i]
        } 
        else {
            map[input[i]] = true;
        }
        console.log(map);
    }
    return undefined;
}

function firstRecurringCharacter2(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
}

console.log(firstRecurringCharacter([2,5,5,2,3,6,9,7]));
console.log('*******************************************');
console.log(firstRecurringCharacter2([2,5,5,2,3,6,9,7]));