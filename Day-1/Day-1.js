function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
const number = Math.floor(Math.random()* (rangeEnd - rangeStart) + rangeStart)
	return number
}

console.log(`My random number: ${randomNumberGeneratorInRange(10, 50)}`)
console.log(`My random number: ${randomNumberGeneratorInRange(100, 200)}`)

