
function findOutlier(integers) {
    //your code here
      let evenValue = []
      let oddValue = []
      for(let i=0; i<integers.length; i++){

        (integers[i]%2 !==0) ? oddValue.push(integers[i]) : evenValue.push(integers[i])
      }
    return (oddValue.length>evenValue.length)? evenValue[0] :  oddValue[0]
}
  
console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([0,0,3,0,0]))
console.log(findOutlier([1,1,0,1,1]))


