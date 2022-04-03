
console.log("Write a program to find the greatest common divisor (gcd) of two positive numbers.")

function gcd(a, b) {
	// write your code here
    console.log(!b, a,b)
    return (!b) ?  a : gcd(b, a%b)

}

let a = 11
let b = 33
console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));

