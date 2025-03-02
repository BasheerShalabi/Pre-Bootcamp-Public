function sigma(num){
    var sum=0;
    for(var i=0;i<=num;i++){
        sum+=i;
    }
    return sum
}

//console.log(sigma(44))

function factorial(num){
    var sum =1;
    for(var i=1;i<=num;i++){
        sum*=i;
    }
    return sum
}

//console.log(factorial(5))


    function drawLeftStars(num ,char){
        var arr=[];
        if(num>74)return 0
             for(var i=0;i<num;i++){
               arr.push(char)
             }
             for(var i=num;i<75;i++){
                arr.push(" ")
              }
             console.log(String(arr))
    }
    

    function drawRightStars(num,char){
        var arr=[];
        if(num>74)return 0
             for(var i=74;i>=(74-num);i--){
               arr[i]=char
             }
             for(var i=(74-num);i>=0;i--){
                arr[i]=" "
              }
             console.log(String(arr))
    }
    
    function drawCenteredStars(num,char){
           var arr=[];
           if(num>74)return 0
           for(var i=0;i<75;i++){
            arr.push(" ");
           }
          var start= Math.floor((74-num)/2)
           for(var i=start;i<(num+start);i++){
            arr[i]=char
           }
           console.log(String(arr))
        }


    drawLeftStars(30,"&")
    drawRightStars(30,"^")
    drawCenteredStars(30 ,"*")
