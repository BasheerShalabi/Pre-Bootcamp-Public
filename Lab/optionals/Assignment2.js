function countdown(num){
    var arr =[]
    for(var i=num;i>=0;i--){
        arr.push(i)
    }
    return arr
}
//console.log(countdown(7))
function printReturn(arr){
    if(arr.length<2){
        console.log("array too long")
        return 0
    }else{
        console.log(arr[0])
        return arr[1]
    }
}

//console.log(printReturn([4,5]))

function firstPlusLength(arr){
    return arr[0]+arr.length
}
//booleans are treated as 0 and 1 , while strings are just appended
//console.log(firstPlusLength([true,6,5,4,346,5,5]))

function greaterSecond(){
    var arr = [1,3,5,7,9,13]
    var count=0
    for(var i =0;i<arr.length;i++){
        if(arr[i]>arr[1])count++
    }
    console.log(count)
}
//greaterSecond()

function greaterSecond2(arr){
    if(arr.length<2)return 0
    var count=0
    var newarr=[]
    for(var i =0;i<arr.length;i++){
        if(arr[i]>arr[1]){
            count++
            newarr.push(arr[i])
        }
    }
    console.log(count)
    return newarr
}
//console.log(greaterSecond2([6,5,4,3,6,7,5,8,99,7,88,67,77]))

function thisLength(num1,num2){
    if(num1==num2){
        console.log("Jinx!")
        return 0
    }
    var arr=[]
    for(var i=0;i<num1;i++){
        arr.push(num2)
    }
    return arr
}
//console.log(thisLength(3,6))

function fitFirst(arr){
    if(arr.length>arr[0]){
        console.log("Too Small!")
    }else if(arr.length<arr[0]){
        console.log("Too Big!")
    }else{
        console.log("Just right")
    }
}
//fitFirst([5,5,436,6,4])

function fToC(degreeF){
    return ((degreeF-32)*5)/9
}
//console.log(fToC(92))

function cToF(degreeC){
    return ((9*degreeC)/5)+32
}
//console.log(cToF(-40))