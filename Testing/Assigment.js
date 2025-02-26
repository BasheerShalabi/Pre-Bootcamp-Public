//Only keep the last few
function Shorten(arr,X){
    for(var i=arr.length;i>X;i--){
        arr.pop()
    }
    return arr
}
console.log([2,4,36,73,4,5,7])
console.log(Shorten([2,4,36,73,4,5,7],3))
//-------------------------------------------------
Divide()
//Math help
function Math(B ,M){
   var X = -B/M
   return X
}
console.log("Given Y = 6X + 5 ,the X intercept is "+ `[${Math(5,6)},0]`)
//-------------------------------------------------
//Poor kenny
function whatHappensToday(){
var outcomes = [['volcano',0.10],['tsunami',0.15],['earthquake',0.20],['blizzard',0.25],['meteor',0.30]]
var random = global.Math.random(); //i am in a Node.js enviroment
var testingOutcomes =0;
for(var i =0;i<outcomes.length;i++){
    testingOutcomes += outcomes[i][1];
    if(random < testingOutcomes){
        console.log("Today you get "+outcomes[i][0]);
        break;
    }
}
}
whatHappensToday()
//-------------------------------------------------
Divide()
//What Really happened
function whatReallyHappensToday(){
    var outcomes = [['volcano',0.10],['tsunami',0.15],['earthquake',0.20],['blizzard',0.25],['meteor',0.30]]
    var whatHappens =[];
    for(var i =0;i<outcomes.length;i++){
        var random = global.Math.random() //i am in a Node.js enviroment
        if(random < outcomes[i][1]){
            whatHappens.push(outcomes[i][0]);
        }
    }
    console.log("The Outcome today is "+whatHappens);
    }
whatReallyHappensToday()
//-------------------------------------------------
Divide()
//Soaring IQ
var initalIQ = 101;
var finalIQ = initalIQ;
for(var i =1;i<=98;i++){
    finalIQ += i/100; 
}
//this can be simplified by using the series sum equation n(n+1)/2
//console.log(initalIQ + ((98*(98+1))/2)/100)
console.log(finalIQ)
//-------------------------------------------------
Divide()
//Letter Grade
function Grades(grade){
 switch(true){
    case(grade <=100&&grade>=90):
    console.log("Score:"+grade+" "+"Grade:A");
    break;
    case(grade <=89&&grade>=80):
    console.log("Score:"+grade+" "+"Grade:B");
    break;
    case(grade <=79&&grade>=70):
    console.log("Score:"+grade+" "+"Grade:C");
    break;
    case(grade <=69&&grade>=60):
    console.log("Score:"+grade+" "+"Grade:D");
    break;
    default:
        console.log("you fail")
 }
}
Grades(82);
Grades(71);
Grades(97);
//------------------------------------------------
Divide()
//More accurate grades
function MoreGrades(grade){
    switch(true){
       case(grade <=100&&grade>=94):
       console.log("Score:"+grade+" "+"Grade:A");
       break;
       case(grade <=93&&grade>=90):
       console.log("Score:"+grade+" "+"Grade:A-");
       break;
       case(grade <=89&&grade>=87):
       console.log("Score:"+grade+" "+"Grade:B+");
       break;
       case(grade <=86&&grade>=84):
       console.log("Score:"+grade+" "+"Grade:B");
       break;
       case(grade <=83&&grade>=80):
       console.log("Score:"+grade+" "+"Grade:B-");
       break;
       case(grade <=79&&grade>=77):
       console.log("Score:"+grade+" "+"Grade:C+");
       break;
       case(grade <=77&&grade>=74):
       console.log("Score:"+grade+" "+"Grade:C");
       break;
       case(grade <=73&&grade>=70):
       console.log("Score:"+grade+" "+"Grade:C-");
       break;
       case(grade <=69&&grade>=67):
       console.log("Score:"+grade+" "+"Grade:D+");
       break;
       case(grade <=66&&grade>=64):
       console.log("Score:"+grade+" "+"Grade:D");
       break;
       case(grade <=693&&grade>=60):
       console.log("Score:"+grade+" "+"Grade:D-");
       break;
       default:
           console.log("you fail")
    }
   }
MoreGrades(82);
MoreGrades(71);
MoreGrades(97);
MoreGrades(89);
MoreGrades(78);
MoreGrades(69);




function Divide(){
    console.log("--------------------------------------------------------------")
}