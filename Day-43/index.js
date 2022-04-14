
function high(x){
    let word = x.split(' ').map(word => [...word].reduce((prev,curr)=> prev+curr.charCodeAt(0)-96,0))
    return x.split(' ')[word.indexOf(Math.max(...word))]
    
}

console.log(high('man i need a taxi up to ubud'))
