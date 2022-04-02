console.log("Mexican Wave")

function wave(str) {
    // Your Code goes below
  const result = []
    for (let i=0; i<str.length; i++){
      const split = str.split('')
      if(split[i] !== " "){
        split[i] = str[i].toUpperCase();
        result.push(split.join(''))
      }
    }
  return result  
}
  
console.log(wave("hello"));
console.log(wave("two words"));
console.log(wave("gap"));