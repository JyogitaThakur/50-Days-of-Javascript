
const needsLicense = (kind) => {
	// code here
    return (kind=="car" || kind == "truck") ? true : false
}

const chooseVehicle = (option1, option2) => {
	// code here
    let chooseVechile = [option1,option2]
	return `${chooseVechile.shift()} is clearly the better choice.`
}

const calculateResellPrice = (originalPrice, age) => {
	// code here
    let value = 0
    if(age < 3) {
        value = (originalPrice*80)/100;
    }
    else if(age > 10){
      value = (originalPrice*50)/100;
    }
    else if(age<3 && age <10){
      value = (originalPrice*70)/100;
    }
	return value
}

console.log(needsLicense('car'))
console.log(needsLicense('bike'))
console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'))
console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'))
console.log(calculateResellPrice(1000, 1))
console.log(calculateResellPrice(1000, 15))