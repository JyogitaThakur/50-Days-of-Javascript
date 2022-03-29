// console.log("Write a function to remove array element based on object property?")

const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    // write your solution here  

        const Array = array.filter(key => key.field !== filterField);
        console.log(Array)
        return Array;
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)


