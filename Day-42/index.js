function sumTwoSmallestNumbers(numbers) {
    //Code below
    const minValue = Math.min(...numbers)
    const secondMinValue = numbers.sort((a,b)=>a-b)
    return value = minValue+secondMinValue[1]
    
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))
