
const valid = (string) => {
    // code here
    // var split = string.split(' ').join('')
    var oddSum = 0;
    var evenSum = 0;
    var numToString = string.replace(/\s/g, '')
    console.log(numToString)
    for(let i = numToString.length-1; i >= 0; i--){
      if(i % 2 === 0){
        if(numToString[i] * 2 >= 9){
          evenSum += ((numToString[i] * 2) - 9 );
        } else {
          evenSum += numToString[i] * 2;
        }
      } else {
        oddSum += parseInt(numToString[i]);
      }
    }
    return (oddSum + evenSum) % 10 === 0 ? true : false;
}

console.log(valid('8569 6195 0383 3437'))