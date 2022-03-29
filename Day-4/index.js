
// const time = '12:10AM';
// const time = '5:10AM';
// const time = '12:33PM';
// const time = '01:59PM';
// const time = '10:02PM';
const time = '11:8PM';

function convertTo24HrsFormat(time) {
    // write your solution here
    let [hours, modifier] = time.split(':');
    console.log([hours, modifier])

    let hour = parseInt(hours)
    console.log(modifier)

    let minutes = modifier.slice(0,2)  
    console.log(minutes)
    
    if(time.length === 6){
        if(time.charAt(2) == ':'){
            hour = time.slice(0,3)
            minutes = "0"+ time.slice(3,4)
            console.log (hour,minutes)
        }
        else{
            hour = hour
            minutes = time.slice(2,4)
            console.log (hour,minutes)
        }
    }
    
    if(modifier.endsWith('AM')){
        if(hour < 9){
          hour ="0"+ hour 
          console.log(hour) 
        }
        else if(hour == 12){
            hour = "00"  
            console.log(hour)  
        }
    }
    if(modifier.endsWith('PM')){
        if(hour == 12){
        hour = "12"  
        console.log(hour) 
        }
        else{
            hour = parseInt((hour) + 12)
        }
    }
    return `${hour}:${minutes}`
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
