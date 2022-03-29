console.log("WeIrD StRiNg CaSe")
// index No. odd then lowercase
// index no even upper case

function toWeirdCase(string) {
    // Your code goes here
    let split = string.split('')
    let str="";
    // console.log(split)
    for (let i = 0 ; i<split.length; i++){
        
        if(i%2==0){
            str += split[i].toUpperCase()
            // console.log(str)
        } 
        else{
            str += split[i].toLowerCase()
            // console.log(str)
        } 
    }
    return str
  }
  
  console.log(
    `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
  );
  
  console.log((`The weird case of ${"This"} is ${toWeirdCase("This")}`))

  console.log(`The weird case of ${"This is a test"} is ${toWeirdCase("This is a test")}`)