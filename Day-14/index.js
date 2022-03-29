// console.log("Convert a number, represented as a sequence of digits in one base, to any other base.")
// // binary logic
// n = 1100
// console.log(n.toString(2))
// console.log(n.toString(8))
// console.log(n.toString(16))
// console.log(n.toString(10))

const convertToIntialBase = (digits,baseA) => {
    return parseInt(digits.join('',baseA))
}
const convertToFinalBase = (digit,baseB) => {
    return digit.toString(baseB)
}
const convertDigitsToAskedBase = (digits, baseA, baseB) => {
    // Your code here
    let num = convertToIntialBase(digits,baseA)
    num = convertToFinalBase(num,baseB)
    num = num.split('')
    for(let i=0;i<num.length;i++){
        if(num[i] == 'a') num[i] = 10
        else if(num[i] == 'b') num[i] = 10 
        else if(num[i] == 'b') num[i] = 11 
        else if(num[i] == 'c') num[i] = 12 
        else if(num[i] == 'd') num[i] = 13 
        else if(num[i] == 'e') num[i] = 14 
        else if(num[i] == 'f') num[i] = 15  
        else num[i] = parseInt(num[i])
    }
    return num
}

console.log(convertDigitsToAskedBase([5, 8], 10, 16));



// parseInt(string, base)
// first convert the string in to the given baseA and then convert to the baseB