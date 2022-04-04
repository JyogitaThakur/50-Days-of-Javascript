
console.log("Write a program to print unique values from an array")

function set(arrOfNum) {
	// write your code here
    let unique = [... new Set(arrOfNum)]
	return unique
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log("result is + " + set(arrOfNum));