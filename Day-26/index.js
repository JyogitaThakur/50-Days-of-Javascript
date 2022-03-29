console.log("Find the odd int")
function findOdd(arr){
    let count= 0
    for (let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length ;j++){
            if(arr[i]==arr[j]){
                count++
            }
        }
        if(count %2 !== 0){
            console.log(arr[i])
            return arr[i]
        }
    }
}

console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))
// console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]))
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))


// using reduce and XOR
// function findOdd(arr) {
//     //happy coding!
//     console.log(arr)
//     return arr.reduce(function(c,v){
//         console.log(c,v)
//         console.log(c^v)
//         return c^v
//     },0);
// }

