console.log("Given a number from 0 to 999,999,999,999, spell out that number in English.")

const sayNumberInEnglish = (n /* ADD MORE PARAMETERS IF NEEDED */) => {
    // Write your solution here

    var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");

    var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

    if (n < 20) return num[n];
        var digit = n%10;
        if (n < 100) 
         return tens[Math.floor(n/10)-2] + (digit? "-" + num[digit]: "");
        if (n < 1000) 
        return num[~~(n/100)] +" hundred" + (n%100 == 0? "": " " + sayNumberInEnglish(n%100));

        if(n < 10000)
        return sayNumberInEnglish(Math.floor(n/1000)) + " hundred" + (n%1000 != 0? " " + sayNumberInEnglish(n%1000): "");

        if(n < 100000)
        return sayNumberInEnglish(~~(n/1000)) + " thousand" + (n%1000 != 0? " " + sayNumberInEnglish(n%1000): "")

        if(n < 1000000)
        return sayNumberInEnglish(~~(n/100000)) + " hundred" + (n%100000 != 0? " " + sayNumberInEnglish(n%100000): "")

        return sayNumberInEnglish(~~(n/1000000)) + " million" + (n%1000000 != 0? " " + sayNumberInEnglish(n%1000000): "")

    
}

console.log(`5635 in english is: ${sayNumberInEnglish(67744)}`)


n = 74411
console.log(n<100000)
console.log(n/1000)
console.log(n%1000)
