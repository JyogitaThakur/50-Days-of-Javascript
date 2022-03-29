console.log("Calculate Grains on a given square on a chessboard")

const totalGrains = () => {
	// Code here
    let input = BigInt(0)
    for(i=0 ;i<64; i++){
       input += BigInt((2 ** i))  
    }
    return input
}

const grainsOn = (input) => {
	// Code here
     return BigInt(Math.pow(2,(input -1 )))
}

console.log(`Grains on 5th square: ${grainsOn(5)}`)
console.log(`Total grains upto 5th square: ${totalGrains()}`)