console.log("Mumbling")

function accum(s) {
    // your code goes below
    return [...s].map((a, i) => {
        return a.toUpperCase() + a.toLowerCase().repeat(i);
      }).join('-');     
}

// console.log(accum("Zpgl"))
console.log(accum("ZpglnRxqenU"))
// console.log(accum("NyffsGeyylB"))