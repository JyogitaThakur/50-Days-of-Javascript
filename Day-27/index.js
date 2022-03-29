console.log("Vowel Count")
function getCount(str) {
    let vowelsCount = 0;
    // enter your magic here
    let split = str.toLowerCase().split('')
    split.forEach(ele => {
        if(ele =="a" || ele == "e" || ele == "i" || ele == "o" || ele == "u"){
            vowelsCount++
        }
    });
    return vowelsCount;
  }
  
console.log(getCount("abracadabra"));
console.log(getCount("THe Strings are SOO COOL"))
console.log(getCount("There exists only 5 vowels"))

