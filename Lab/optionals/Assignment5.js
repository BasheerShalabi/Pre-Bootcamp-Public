function threesFives() {
    var sum = 0
    for (var i = 100; i <= 4000000; i++) {
        var test = (i % 3 == 0 || i % 5 == 0) && (!((i % 3 == 0) && (i % 5 == 0)))
        if (test) {
            sum += i;
        }
    }
    console.log(sum)
}

function betterThreesFives(start, end) {
    var sum = 0
    for (var i = start; i <= end; i++) {
        var test = (i % 3 == 0 || i % 5 == 0) && (!((i % 3 == 0) && (i % 5 == 0)))
        if (test) {
            sum += i;
        }
    }
    console.log(sum)
}

function generateCoinChange(cents) {
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    var half_dollars = 0;
    var dollars = 0;
    if (cents > 999) {
        dollars = Math.floor(cents / 100)
        half_dollars = Math.floor((cents % 100) / 50)
    }
    quarters = Math.floor(cents > 999 ? (cents % 50) / 25 : cents / 25)
    dimes = Math.floor((cents % 25) / 10)
    nickels = Math.floor(((cents % 25) % 10) / 5)
    pennies = Math.floor((cents % 25) % 10) % 5

    console.log(`dollar: ${dollars} , half: ${half_dollars} , quarter: ${quarters} , dime: ${dimes} , nickel : ${nickels} , pennies : ${pennies}`)
}

//generateCoinChange(9494)


function messymath(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        if (i % 3 == 0) {
            continue
        } else if (i % 7 == 0) {
            sum += (i * 2)
        } else if (i == (num / 3)) {
            return -1
        } else {
            sum += i
        }
    }
    return sum;
}
// console.log(messymath(4))
// console.log(messymath(8))
// console.log(messymath(15))



function bars() {
    for (var i = 1; i <= 12; i++) {
        console.log(i)
        console.log("chick")
        console.log("boom")
        console.log("chick")
    }
}

// bars()

function fibonacci(num) {
    var arr = [0, 1]
    if (num == 1) return 1
    if (num == 0) return 0
    for (var i = 2; i < num; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }

    return arr[num - 1] + arr[num - 2]
}

// console.log(fibonacci(0))
// console.log(fibonacci(1))
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(4))
// console.log(fibonacci(5))
// console.log(fibonacci(6))
// console.log(fibonacci(7))

function sumToOne(num) {
    var arr = []
    while (num > 1) {
        arr.push(num % 10)
        num = Math.floor(num / 10)
    }
}