// Create a regular expression to validate if the given input is valid Indian mobile number or not


console.log("Regular Expression")
// const number = '+919876543210'
// const number = '+91 9876543210'
// const number = '09876543210'
// const number = '9876543210'
const number = '99876543210' //f
console.log(number.length)

function validateMobile(number) {
    // write your solution here

    let re = /^((((\+){1}91){1}))?[0]?\s?([970]){1}([0-9]){9}$/gm
  
    if(re.test(number)){
        return true
    }
    else{
        return false
    }
    
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)