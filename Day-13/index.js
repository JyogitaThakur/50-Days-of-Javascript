console.log("Convert given seconds to space age on all planets of our solar system")

const yearsInAllPlanets = {
    Mercury: 0,
    Venus: 0,
    Earth: 0,
    Mars: 0,
    Jupiter: 0,
    Saturn: 0,
    Uranus: 0,
    Neptune: 0,
}

function spaceAgeConversion(millisec) {

    var Mercury = (millisec / (0.2408467 * 31536000))
    var Venus = (millisec / (0.61519726 * 31536000))
    var Earth = (millisec / (31536000))
    var Mars = (millisec / (1.8808158 * 31536000))
    var Jupiter = (millisec / (11.862615 * 31536000))
    var Saturn = (millisec / (29.447498 * 31536000))
    var Uranus = (millisec / (84.016846 * 31536000))
    var Neptune = (millisec / (164.79132 * 31536000))

    // return (yearsInAllPlanets.Mercury = Mercury)
    yearsInAllPlanets.Mercury = parseFloat(Mercury.toFixed(2))
    yearsInAllPlanets.Venus = parseFloat(Venus.toFixed(2))
    yearsInAllPlanets.Earth = parseFloat(Earth.toFixed(2))
    yearsInAllPlanets.Mars = parseFloat(Mars.toFixed(2))
    yearsInAllPlanets.Saturn = parseFloat(Saturn.toFixed(2))
    yearsInAllPlanets.Jupiter = parseFloat(Jupiter.toFixed(2))
    yearsInAllPlanets.Uranus = parseFloat(Uranus.toFixed(2))
    yearsInAllPlanets.Neptune = parseFloat(Neptune.toFixed(2))

    return yearsInAllPlanets

}
console.log(spaceAgeConversion(19827103))


// console.log(1000 * 60 * 60 * 24*365)--- for one year 
// other planest years ====> (seconds/(earthyears * Venus: orbital period 0.61519726 Earth years))

// parseFloat is used because as the objects returns the string and using parseFloat we get number 