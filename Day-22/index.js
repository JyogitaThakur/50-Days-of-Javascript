console.log("Unique In Order")

let uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    let arr = Array.isArray(iterable) ? iterable : iterable.split('');
    console.log(arr)
    let unique = arr.filter((item, i) => {
        return arr[i] != arr[i + 1];
    })
    return unique;
  };

 console.log(uniqueInOrder([1,2,2,3,3])) 
 console.log(uniqueInOrder('ABBCcAD'))
 console.log(uniqueInOrder('AAAABBBCCDAABBB'))
