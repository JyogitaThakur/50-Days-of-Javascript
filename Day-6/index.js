// Write a function to truncate a string to a certain number of words

const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    return str.split(' ').splice(0,wordLimit).join(' ')
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)


// Note
// => First split then using .split(" ") i.e space and then slice(0 , wordLimit) and join(' ')
