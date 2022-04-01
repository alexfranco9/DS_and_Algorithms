function bracesValid(input){
    var openParen = 0
    var closePeren = 0
    var openCurlyBrac = 0
    var closeCurlyBrac = 0
    var openSquareBrac = 0
    var closeSquareBrac = 0
    for(var i = 0; i < input.length; i++){
        if(input[i] == "("){
            openParen++
        }
        if(input[i] == ")"){
            closePeren++
        }
        if(input[i] == "{"){
            openCurlyBrac++
        }
        if(input[i] == "}"){
            closeCurlyBrac++
        }
        if(input[i] == "["){
            openSquareBrac++
        }
        if(input[i] == "]"){
            closeSquareBrac++
        }
        if(closePeren > openParen){
            return false
        }
        if(closeCurlyBrac > openCurlyBrac){
            return false
        }
        if(closeSquareBrac > openSquareBrac){
            return false
        }
    }
    if(openParen != closePeren){
        return false
    }
    if(openCurlyBrac != closeCurlyBrac){
        return false
    }
    if(openSquareBrac != closeSquareBrac){
        return false
    }
    else{
        return true
    }
}

console.log(bracesValid("(]"))


// more solutions //.

function parensValid(input) {
    var closing = 0
    var opening = 0
    for (var i = 0; i < input.length; i++){
        if (closing > opening){
            return false
        }
        if (input[i] == '('){
            opening++
        }
        else if (input[i] == ')'){
            closing++
        }
    }
    if (closing != opening){
        return false
    }
    else{
        return true
    }
}

console.log(parensValid('((dfdsa))'))

function bracesValid(input){
    var closingP = 0
    var openingP = 0
    var closingSquare = 0
    var openingSquare = 0
    var closingCurly = 0
    var openingCurly = 0
    for (var i = 0; i < input.length; i++){
        if (closingP > openingP || closingSquare > openingSquare || closingCurly > openingCurly){
            return false
        }
        if (input[i] == '('){
            openingP++
        }
        else if (input[i] == ')'){
            closingP++
        }
        else if (input[i] == '['){
            openingSquare++
        }
        else if (input[i] == ']'){
            closingSquare++
        }
        else if (input[i] == '{'){
            openingCurly++
        }
        else if (input[i] == '}'){
            closingCurly++
        }

    }
    if (closingP != openingP || closingSquare != openingSquare || closingCurly != openingCurly){
        return false
    }
    else{
        return true
    }
}
console.log(bracesValid('x(37[q{3, 7, 9}{22, 6, 91}])(32q)'))
console.log(bracesValid('()]'))
