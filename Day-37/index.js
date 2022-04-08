const isLeap = (year) => {
    // code here
return (year % 400 == 0 ) ? true: (year % 4 == 0 && year % 100 !== 0) ? true :  false

}
console.log(isLeap(1900))