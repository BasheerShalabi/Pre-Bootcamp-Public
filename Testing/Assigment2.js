function extractdigit(num, digitNum) {
    var divider = 1;
    //turn the number to positive
    if (num < 0) {
        num = num * -1
    }

    var newNum = num;
    //check if the user wants whole number or fraction
    if (digitNum > 0) {
        //determine the length of the number
        while (newNum) {
            if (Math.trunc(newNum) == 0) break
            newNum /= 10
            divider *= 10;
        }
        //determine the divider to get the placement of the digit 
        for (var i = 1; i <= digitNum; i++) {
            divider /= 10;
        }
        //Get rid of fractions
        divider = Math.trunc(divider)
    }
    //if the user wants fractions
    else if (digitNum < 0) {
        //turn the digitnum positive
        digitNum *= -1;
        //the divider here is treated as a multiplier, we are detemining the placement of the digit in fractions
        for (var i = 1; i <= digitNum; i++) {
            divider *= 10
        }
        //get the fractions without the whole number
        newNum -= Math.trunc(newNum)
        //we multiply by the calculated divider and take the remainder of 10
        return Math.floor(newNum * divider) % 10

    }
    else {
        divider = 1;
    }
    //the divider gets to 0 when you give it a digit placement outside of the number
    if (divider == 0) { return 0 }
    //we divide the number by the calculated divider and take the remainder of 10
    return Math.floor(num / divider) % 10
}

 console.log(extractdigit(3256,3))
 console.log(extractdigit(32056,3))
 console.log(extractdigit(3256,0))
 console.log(extractdigit(-3256,3))
 console.log(extractdigit(3256.4604,-3))
 console.log(extractdigit(3256.5796,-3))
 console.log(extractdigit(3256,8))

 console.log("----------------------------------------------------")
 console.log("----------------------------------------------------")

function MostSignificant(num) {
    //check if number is positive or negative
    if (num < 0) {
        //if negative turn it positive
        num = Math.abs(num)
        //if it has fractions , turn it to a whole number
        while ((num !== Math.floor(num)) || num < 1){ 
            num *= 10;
        }
        //return the remainder of 10
        return num % 10

    } else {
        //if positive and whole keep dividing by 10
        while (num >= 10){ 
            num /= 10;
        }
        //if its a fraction keep multiplying by 10 to till the first whole number
        while (num < 1) {
            num *= 10;
        }
        //cut any fractions
        num = Math.floor(num);
        return num;
    }
}

console.log(MostSignificant(0.0000785))
console.log(MostSignificant(985))
console.log(MostSignificant(-0.00034))
console.log(MostSignificant(-985))

