console.log("Longest Consecutive Sequence")

const longestConsecutiveSequence = (inputArray) => {
	// Your code here
    // sort the array
    let count = 0, ans = 0
    var result = inputArray.sort(function(a,b) {return a-b})
    console.log(result)

    // remove the duplicate values
    let unique = []
    for (let i=0; i<result.length; i++){
        if(inputArray[i]!=inputArray[i-1]){ 
            unique.push(inputArray[i])    
        }
    }
    console.log(unique)

    //To check the consecutive values
    for( let i=0; i<unique.length; i++){
        if(i>0){
            if(unique[i] == unique[i-1]+1){
                count++
            }
        }
        else count = 1
    }
    return count
}
console.log(longestConsecutiveSequence([100,4,200,1,3,2]))
console.log(longestConsecutiveSequence([0,3,7,2,5,8,4,6,0,1]))

