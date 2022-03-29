console.log("Stop gninnipS My sdroW!")
function spinWords(string){
  return string.split(' ').map(w => w.length < 5 ? w : w.split('').reverse().join('')).join(' ');
}

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("You are almost to the last test"))



// function spinWords(string) {
//     const str = string.split(" ")
//     console.log(str)
//     const reverseWords = str.map(word => {
//         if(word.length < 5){
//             // console.log(word);
//             return word
//         }
//         else{
//             // console.log(word.split('').reverse().join(''))
//             return word.split('').reverse().join('')
//         }
//     });
//     return reverseWords.join(" ")

// }
  