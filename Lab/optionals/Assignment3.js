function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big"
        }
    }
    console.log(arr)
}

//makeItBig([-1,-5,7,7,-5,34,5])


function lowHigh(arr) {
    var max = 0
    var min = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]

        if (arr[i] < min) min = arr[i]
    }
    console.log(min)
    return max
}

//lowHigh([5,34,56,3,-6,548,-457,5,36])

function double(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2
    }
    return arr;
}
//console.log(double([2,3,4,5,6,7,8]))

function countPositives(arr) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) count++
    }
    arr[arr.length - 1] = count
    return arr
}

//console.log(countPositives([4,-1,-2,3,5,-56,4,3]))

function evenOdds(arr) {
    var odds = 0
    var evens = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evens++
            odds = 0;
        } else {
            odds++;
            evens = 0;
        }
        if (odds >= 3) {
            console.log("That's odd!")
            odds = 0;
        } else if (evens >= 3) {
            console.log("Even more so!")
            evens = 0;
        }
    }

}
//evenOdds([2,2,2,5,5,5,5,6,7,8,7,7,7,9,9,9,9,2,2,2])

function increment(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            arr[i]++;
        }
    }
    return arr
}

//console.log(increment([1,24,6,4,5,7,8,7,9,11]))

function previousLength(arr) {
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1].length
    }
    arr[0] = 0;
    return arr
}
//console.log(previousLength(["dhdfh","dfhdh","hffgdd","fddsse","etyeryer"]))

function addSeven(arr) {
    var newarr = arr;
    for (var i = 1; i < arr.length - 1; i++) {
        newarr[i] += 7;
    }
    return newarr
}

//console.log(addSeven([88,76,5,3,6,8]))

function reverse(arr) {
    var newarr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newarr.push(arr[i]);
    }
    arr = newarr
    return arr
}

//console.log(reverse([6,5,4,3,2,1]))

function negative(arr) {
    var newarr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) newarr.push(-arr[i])
        else newarr.push(arr[i])
    }
    return newarr
}

//console.log(negative([1,4,5,3,-4,-4,-8]))

function alwaysHungry(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy")
            count++
        }
    }
    if (count == 0) {
        console.log("I'm hungry")
    }
}

//alwaysHungry(["food","food"])
//alwaysHungry([])

function swapToCenter(arr) {
    for (var i = 0; i < (arr.length / 2) - 1; i++) {
        if (i % 2 == 0) {
            var temp = arr[i]
            arr[i] = arr[arr.length - i - 1]
            arr[arr.length - i - 1] = temp
        }
    }
    return arr
}

//console.log(swapToCenter([1,2,3,4,5,6,7,8,9,10,11]))

function scale(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= num
    }
    return arr
}

//console.log(scale([4,3,5,7,94,55,66,43,76],5))