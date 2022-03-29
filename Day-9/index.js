console.log("Write a function to check if an object is empty or not in javaScript?")

// const obj = {}
const obj = { key: 1 };

function isEmpty(object){
    for (key in object){
        return false
    }
    return true
}

console.log(isEmpty(obj))