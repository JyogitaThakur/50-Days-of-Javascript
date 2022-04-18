
function isIsogram(str) {
    // your code here
    const uniqueStr = [...new Set(str)].join('').toLowerCase()
    return (str === uniqueStr) ? true : false
    
  
}
console.log(isIsogram("isogram"))
console.log(isIsogram("moOse"))
console.log(isIsogram(""))

