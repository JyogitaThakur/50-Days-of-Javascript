console.log("Determine if a sentence is a pangram")

function isPangram(string){
    // character set capturing group with negative lookahead
      let regex = /([a-z])(?!.*\1)/gi;
      return (string.match(regex)).length === 26;
    }
    
    console.log(isPangram("The quick brown fox jumps over the lazy dog."));// true

//  Note: 
// . matches any one character in place of . you can put any charcater but only one character more then one will does not match the string
//* matches 0 or more characters eg. nsyume it accepts the string expression 
//? means after ? the character is optional eg. a and e is optional
