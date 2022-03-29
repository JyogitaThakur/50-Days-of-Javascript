console.log("Return the N-th value of the Fibonacci sequence")

function fibonacci(n) {
    // write your solution here
    let f1 = 0, f2 = 1;
    let f3;
    for (var i = 0; i < n; i++) {
        console.log(f1)
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
    }
    return f1;
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`)

