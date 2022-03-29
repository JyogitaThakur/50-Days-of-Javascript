console.log("Resistor Color map")


// These colors are encoded as follows:

// Black: 0
// Brown: 1
// Red: 2
// Orange: 3
// Yellow: 4
// Green: 5
// Blue: 6
// Violet: 7
// Grey: 8
// White: 9

const colorCode = (color) => {
	// Code here
    let colorlower = color.toLowerCase();
    switch(colorlower){
        case 'black' : return 0
        case 'brown' : return 1
        case 'red' : return 2
        case 'orange' : return 3
        case 'yellow' : return 4
        case 'green' : return 5
        case 'blue' : return 6
        case 'violet' : return 7
        case 'grey' : return 8
        case 'white' : return 9        
    }
}

console.log(colorCode('blue'))
