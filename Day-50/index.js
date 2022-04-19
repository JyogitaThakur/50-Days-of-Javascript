
function getMiddle(s) {
    // your code here
    let num = s.length/2
    return (s.length % 2 == 0)? `${s[num] + s[num-1]}`: `${s[Math.floor(num)]}`
  }
  
  console.log(getMiddle("testing"))
  console.log(getMiddle("middle"))
  console.log(getMiddle("A"))