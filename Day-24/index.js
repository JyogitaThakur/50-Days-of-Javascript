console.log("Write Number in Expanded Form")
function expandedForm(num) {
  // Your code here
  let numStr = num.toString().split('');
  console.log(numStr)
  for (let i = 0; i < numStr.length; i++) {
    for (let j = numStr.length - i; j > 1; j--) {
      numStr[i] += 0;
    }
  }
  return numStr.join('+')
}
 
console.log(expandedForm(10))