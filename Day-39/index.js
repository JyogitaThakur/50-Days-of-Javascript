
const timeToMixJuice = (name) => {
	// code here
    switch(name){
        case "Pure Strawberry Joy":
            return 0.5
        case "Energizer":
        case "Green Garden":
            return 1.5
        case "Tropical Island":
            return 3
        case "All or Nothing":
            return 5
    }
	
}

const limesToCut = (wedgesNeeded, limes) => {
	// code here
    let count=0
    for(let i=0; i<limes.length-1; i++){
      if(limes[i] === 'small') count += 6
      else if(limes[i] === 'medium') count += 8
      else if(limes[i] === 'large') count += 10

      if(count >= wedgesNeeded) return (i+1)
    
    }
	return count
}

const remainingOrders = (timeLeft, orders) => {
	// code here
    for(let i=0; i<orders.length; i++){
      let count = timeToMixJuice(orders[i])
        if(count <= timeLeft){
          orders.shift()
        }
        else{
          return orders;
        }
    }
  return orders
}

console.log(timeToMixJuice('Tropical Island'))
console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']))
console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']))
