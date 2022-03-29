console.log('Ask the Bob')
function hey(message) {
	// Code here
    if(message.toUpperCase() == message){
       return `Calm down, I know what I'm doing!`
    }
    else if(message == 'How are you?'){
        return  'Whoa, chill out!'
    }
    else return 'Whatever'
	
}
console.log(hey('How are you?'))