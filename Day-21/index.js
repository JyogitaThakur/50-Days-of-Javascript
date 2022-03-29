console.log("Write the code for the function which returns the the union of the two given arrays")

const unionOfArrays = (arr1, arr2) => {
    // code below here
    const array = ([...arr1,...arr2])
    return [...new Set(array)]
 };
  
console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);
console.log(unionOfArrays(['a','b','c'],['a',1,2,'d']))
console.log(unionOfArrays(['array','object'],['value','object','key']))
console.log(unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21]) == [1,2,34,45,3,24,21])