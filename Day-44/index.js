
function getDivisorsCnt(num) {
    // code below
    let count = 0
      for(let i=0; i<=num; i++){
          if(num%i == 0){
              count++
          }   
      }
      return count
}
  
console.log(getDivisorsCnt(10))
console.log(getDivisorsCnt(11))
console.log(getDivisorsCnt(54))
