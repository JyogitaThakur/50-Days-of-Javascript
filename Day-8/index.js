console.log("difference between them as number of days")

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
console.log(DAY_IN_MILLISECONDS)
function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    // To set two dates to two variables
    var date1 = new Date(dateText1);
    var date2 = new Date(dateText2);

    // print dates
    console.log(date1,date2)

    // To calculate the time difference of two dates
    let a = date1.getTime()
    let b = date2.getTime()
    console.log(a,b)
    // To calculate the no. of days between two dates
    let c = (b-a)/DAY_IN_MILLISECONDS
    return c
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)


//Note :
// getTime() returns the number of milliseconds since January 1, 1970 00:00:00.
// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;