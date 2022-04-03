function factorial(n) {
	// write your code here
    if (n === 0 || n === 1)
    return 1;
    let fact = 1;
    for(let i=0; i<n; i++){
        fact += fact*i
    }
	return fact
}

let n = 10;
console.log("The factorial of " + n + " is " + factorial(n));
console.log("The factorial of " + 5 + " is " + factorial(5));
console.log("The factorial of " + 10 + " is " + factorial(10));