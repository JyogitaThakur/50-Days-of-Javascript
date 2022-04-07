

const transcription = (dna) => {
    // code here
    const split = dna.split("")
    let value = ""
    split.map(ele => {
        switch (ele) {
            case 'C':
                value += "G"
                break
            case 'G':
                value += "C"
                break
            case 'T':
                value += 'A'
                break
            case 'A':
                value += 'U'
                break
        }
    })
    return value
}

console.log(transcription('GCT'))
console.log(transcription('GATC'))