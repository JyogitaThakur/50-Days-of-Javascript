

function nthlargest(arr, highest) {
	// write your code here
    const array = arr.sort((a, b) => a - b);
    let largest = array[highest]
    return largest
	
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));