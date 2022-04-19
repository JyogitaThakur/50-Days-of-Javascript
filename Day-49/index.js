
function isTriangle(a, b, c) {
    // your code here
      return (a+b>c && a+c>b && b+c>a) ? true : false
  }
  
  console.log(isTriangle(1,2,2))
  console.log(isTriangle(7,2,2))
  console.log(isTriangle(7,14,16))