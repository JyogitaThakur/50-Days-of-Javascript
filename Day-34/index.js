
function mostFreq(arr) {
	// write your code here
    let value, count = 0
    let mostFreq = 1
    arr.sort()
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<=i; j++){
            if(arr[i] == arr[j]){
                count = count + 1
                if(mostFreq < count){
                    mostFreq = count
                    value = arr[i]
                }
            }
            else{
                count = 0
            }
        }  
    }
    return `${value} ${count}`
}

// const arr = [1, 2, 2, 4, 5, 6, 6];
const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

console.log(mostFreq(arr));

