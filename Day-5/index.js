// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

const str = "JavaScript";
let first = (str.indexOf('X'))
let last = (str.lastIndexOf('X'))
function getTheGapX(str) {
     

if (str.indexOf('X') === -1 ){
    return -1
}
else if(str.indexOf('X') == str.lastIndexOf('X')){
    return 0
}
else{
  return str.lastIndexOf('X')- str.indexOf('X')
}

}
console.log(`Gap between the X's: ${getTheGapX(str)}`)