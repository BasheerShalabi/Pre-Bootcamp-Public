// function sweatshirtPricing(num){
//     var cost =0;
//      switch(true){
//         case(num==1): 
//         cost =20;
//         return cost
//         case(num==2): 
//         cost = Math.ceil((num*20)-((num*20)*0.09))
//         return cost
//         case(num==3):
//         cost = Math.ceil((num*20)-((num*20)*0.19))
//         return cost
//         case(num>=4):
//         cost = Math.ceil((num*20)-((num*20)*0.35))
//         return cost
//         default: return 0
//      }
// }
//  console.log(sweatshirtPricing(0))
//  console.log(sweatshirtPricing(1))
//  console.log(sweatshirtPricing(2))
//  console.log(sweatshirtPricing(3))
//  console.log(sweatshirtPricing(4))
//  console.log(sweatshirtPricing(5))
//  console.log(sweatshirtPricing(6))

function clockHandAngles(seconds){
    var hours =0
    var minutes =0
    var remainingSeconds =0
    var weeks =0

    //convert seconds to weeks , hours and minutes
    hours = seconds/3600
    minutes = (seconds%3600)/60
    remainingSeconds = (seconds%3600)%60
    weeks = (hours/24)/7

    //console.log(`${weeks}:${hours}:${minutes}:${remainingSeconds}`)
    
    //convert values to degrees range 0-360
    hours = (hours*30)%360
    minutes = minutes*6
    remainingSeconds = remainingSeconds*6
    weeks = (weeks*360)%360


    console.log(` Week hand: ${weeks} deg, Hour hand: ${hours} deg, Minute hand: ${minutes} deg, Second hand: ${remainingSeconds} deg`)
}


clockHandAngles(119730)
clockHandAngles((3600*24*7) -1)
clockHandAngles(3600)
clockHandAngles(3600*2)
clockHandAngles(3600*12)
