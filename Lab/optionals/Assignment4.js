function rollOne(){
    return Math.floor((Math.random()*6) +1)
}

// console.log(rollOne())
// console.log(rollOne())
// console.log(rollOne())
// console.log(rollOne())
// console.log(rollOne())
// console.log(rollOne())
// console.log(rollOne())

function playFives(num){
    for(var i=1;i<=num;i++){
        var result = rollOne()
        if(result==5){
            console.log(result+" Thats good luck!")
        }else{
            console.log(result)
        }
    }
}

//playFives(6)

function playStatistics(){
    var max =0
    var min =8
    for(var i=0;i<8;i++){
        result =rollOne()
        if(max<result) max = result
        if(min>result) min = result
    }
    console.log(max)
    console.log(min)
}

function playStatistics2(){
    var max =0
    var min =8
    var sum =0
    for(var i=0;i<8;i++){
        result =rollOne()
        sum+=result
        if(max<result) max = result
        if(min>result) min = result
    }
    console.log(max)
    console.log(min)
    console.log(sum)
}

function playStatistics3(num){
    var max =0
    var min =num
    var sum =0
    for(var i=0;i<num;i++){
        result =rollOne()
        sum+=result
        if(max<result) max = result
        if(min>result) min = result
    }
    console.log(max)
    console.log(min)
    console.log(sum)
}
function playStatistics4(num){
    var max =0
    var min = num;
    var sum =1
    for(var i=0;i<num;i++){
        result =rollOne()
        sum+=result
        if(max<result) max = result
        if(min>result) min = result
    }
    console.log(max)
    console.log(min)
    console.log(num>0 ? (sum/num) :0)
}

// playStatistics()
// playStatistics2()
// playStatistics3(8)
// playStatistics4(8)


function roll20(){
    return Math.floor((Math.random()*20) +1)
}

function playStatistics5(){
    var max =0
    var min = 20
    var sum = 1
    var count=0
    var result=0
    var previous =0

    while(true){
        result =rollOne()
        count++
         if(result==previous)break;
        sum+=result
        if(max<result) max = result
        if(min>result) min = result
        previous = result
    }
    console.log(count)
    console.log(max)
    console.log(min)
    console.log(sum/(count-1))
}

//playStatistics5()
 


class Coordinate{
    constructor(){
    this.X = 0
    this.Y = 0;
    }
    reset(){
      this.X=0
      this.Y=0
    }
    moveBy(x,y){
      this.X+=x
      this.Y+=y
    }
    xLocation(){
      return this.X
    }
    yLocation(){
      return this.Y
    }
    distFromHome(){
      return Math.sqrt((this.X*this.X)+(this.Y*this.Y))
    }
}

Claire = new Coordinate()

Claire.moveBy(5,-7)
console.log(Claire.distFromHome())
Claire.moveBy(5,5)
console.log(Claire.xLocation()+", "+Claire.yLocation())
console.log(Claire.distFromHome())