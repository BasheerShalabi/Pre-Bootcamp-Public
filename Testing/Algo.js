// var numberOfAlternatingGroups = function(colors, k) {
//     var arr=[]
//     for(var i=0;i<colors.length;i++){
//         if(colors[i]){
//             for(var j=0;j<k;j++){
//                 if(j%2==0)arr.push(1)
//             }
//         }else{
//             for(var j=0;j<k;j++){
//                 if(j%2==0)arr.push(0)
//             }
//         }
//     }

//     var i=0
//     var x=0
//     var tempCounter=0
//     var counter=0
//    while(i<colors.length){
//     x=i
//     for(var j=0;j<k;x++,j++){
//         if(colors[x]==arr[j])tempCounter++
//     }
//     if(tempCounter==k){
//         counter++
//     }
//     i++
//    }

//    return counter;
// };

// console.log(numberOfAlternatingGroups([0,1,0,1,0,1,0,1],6))



// function numberOfSubstrings(s) {
//     var counter = 0
//     for (var i = 0; i < s.length - 2; i++) {
//         var str = s.substring(i, s.length)
//         var endIndex=str.length
//         while(endIndex>2){
//             var subStr = str.substring(0,endIndex)
//             if (subStr.includes('a') && subStr.includes('b') && subStr.includes('c')) {
//                 counter++
//             }
//             endIndex--
//         }
//     }
//     return counter;
// }

// var numberOfSubstrings = function(s) {
//     var counter = 0
//     for (var i = 0; i < s.length - 2; i++) {
//          var subStr = s.substring(i,s.length)
//         while(subStr.length>2){
//             if (subStr.includes('a') && subStr.includes('b') && subStr.includes('c')) {
//                 counter++
//             }
//            subStr= subStr.slice(0,subStr.length-1)
//         }
//     }
//     return counter;

//     setTimeout
// };

// console.log(numberOfSubstrings("aaacbbbbbbb"))

// var twoSum = function(nums, target) {
//     var ans =[]
//     for(var i=0;i<nums.length;i++){
//         for(var j=i;j<nums.length;j++){
//             if((nums[i]+nums[j])===target){
//                 ans=[i,j]
//                 break
//             }
//         }
//             if(ans.length>0)break
//     }
//     return ans
// };

// console.log(twoSum([3,2,4],6))


// var reverseString = function(s,k) {
//     var temp="0"
//     var res=""
//     var entriesLeft = s.length%(k+k)
//     var endIndex=s.length-entriesLeft

//     if(k>=s.length){
//         for(var i=0;i<s.length/2;i++){
//             temp = str[i]
//             str[i]=str[str.length-i-1]
//             str[str.length-i-1]=temp
//         }
//     }else if(k<=s.length&&s.length<(k+k)){
//         for(var i=0;i<k;i++){
//             temp = str[i]
//             str[i]=str[k-i-1]
//             str[k-i-1]=temp
//         }
//     }else{
//         for(var i=0;i<endIndex;i+=(k+k)){
//         var str = s.substring(i,i+(k+k))
//         var str = str.split("")
//         for(var j=0;j<(str.length/2)/2;j++){
//             temp = str[j]
//             str[j]=str[(str.length/2)-j-1]
//             str[(str.length/2)-j-1]=temp
//         }

//         for(var x=0;x<str.length;x++){
//             res+=str[x] 
//          }
//     }
// }




//     var str=s.substring(endIndex+1,s.length-1)
//     var str = str.split("")
//     if(entriesLeft==1||entriesLeft==0){

//         return res
//     }else{
//     if(entriesLeft<k){
//         for(var i=endIndex+1;i<s.length/2;i++){
//             temp = str[i]
//             str[i]=str[str.length-i-1]
//             str[str.length-i-1]=temp
//         }

//     }else if(entriesLeft>=k&&entriesLeft<(k+k)){
//         for(var i=endIndex+1;i<k/2;i++){
//             temp = str[i]
//             str[i]=str[k-i-1]
//             str[k-i-1]=temp
//         }
//     }

//     for(var x=0;x<str.length;x++){
//         res+=str[x] 
//      }
//     return res
//     }
// };

// console.log(reverseString("abcd",2))


// var reverseWords = function(s) {
//     var arr=[]
//     for(var i=0;i<s.length;i++){
//         arr.push(s[i])
//     }
//     var strs=[]
//      var temp=''
//     for(var i=0;i<arr.length;i++){
       
//         if(arr[i]!=" "){
//             temp+=arr[i]
//         }
//         if(temp != "" && (arr[i]==" "||i==arr.length-1)){
//             strs.push(temp)
//             temp=''
//         }
//     }

//     s = ""
//     for(var i=strs.length-1;i>=0;i--){
//         s+=strs[i]
//         if(i>0&&i<strs.length){
//             s+=" "
//         }
//     }
//     return s
// };

// console.log(reverseWords("   Alice   does   not  even like bob   "))

function pal(x){
// var string = `${x}`

// for(var i=0;i<string.length/2;i++){
//     if(string[i] != string[string.length-i-1])return false
// }
// return true


// if(x<0)return false
// var arr=[]
// while(x>0){
//    arr.push(x%10)
//     x=Math.floor(x/10)
// }

// for(var i=0;i<arr.length/2;i++){
//         if(arr[i] != arr[arr.length-i-1])return false
//     }
//     return true
// var temp =x;
// var num=0
// var i=0
// while(temp>0){
//     num= (num*10) + (temp%10)

//     temp=Math.floor(temp/10)
// }
// console.log(num)
// if(num===x)return true
// else return false
}
// console.log(pal(-55555))
// console.log(pal(555555))
// console.log(pal(123321))
// console.log(pal(12321))
// console.log(pal(10))


function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
 }
 var node31 = new ListNode(1,null)
 var node30 = new ListNode(0,node31)
 var node29 = new ListNode(0,node30)
 var node28 = new ListNode(0,node29)
 var node27 = new ListNode(0,node28)
 var node26 = new ListNode(0,node27)
 var node25 = new ListNode(0,node26)
 var node24 = new ListNode(0,node25)
 var node23 = new ListNode(0,node24)
 var node22 = new ListNode(0,node23)
 var node21 = new ListNode(0,node22)
 var node20 = new ListNode(0,node21)
 var node19 = new ListNode(0,node20)
 var node18 = new ListNode(0,node19)
 var node17 = new ListNode(0,node18)
 var node16 = new ListNode(0,node17)
 var node15 = new ListNode(0,node16)
 var node14 = new ListNode(0,node15)
 var node13 = new ListNode(0,node14)
 var node12 = new ListNode(0,node13)
 var node11 = new ListNode(0,node12)
 var node10 = new ListNode(0,node11)
 var node9 = new ListNode(0,node10)
 var node8 = new ListNode(0,node9)
 var node7 = new ListNode(0,node8)
 var node6 = new ListNode(0,node7)
 var node5 = new ListNode(0,node6)
 var node4 = new ListNode(0,node5)
 var node3 = new ListNode(0,node4)
 var node2 = new ListNode(0,node3)
 var node1 = new ListNode(1,node2)
var l1 = node1
var node80= new ListNode(4,null)
var node70 = new ListNode(6,node80)
var node60 = new ListNode(5,node70)
var l2 = node60
 var addTwoNumbers = function(l1, l2) {
    var num1=BigInt(0)
    var num2=BigInt(0)
    var sum=BigInt(0)
    var i=0
    var num1Exists = true
    var num2Exists = true
    while(true){
        if(l1.next&&num1Exists){
            num1 += BigInt(l1.val)*(BigInt(10)**BigInt(i))
            l1 = l1.next
        }else if(num1Exists){
            num1 += BigInt(l1.val)*(BigInt(10)**BigInt(i))
            num1Exists = false
        }

        if(l2.next&&num2Exists){
            num2 += BigInt(l2.val)*(BigInt(10)**BigInt(i))
            l2 = l2.next
        }else if(num2Exists){
            num2 += BigInt(l2.val)* (BigInt(10)**BigInt(i))
            num2Exists = false
        }

       i++
       if(!num1Exists&&!num2Exists)break
    }
    console.log(num1)
    console.log(num2)

    sum = num1+num2 
    console.log(BigInt(num1+num2))
    var ans = new ListNode
    var pointer = new ListNode
    pointer = ans
    var set=false
    while(sum>0){
        
        var node = new ListNode(Number(sum%BigInt(10)))
        if(!set){
            ans = node
            set = true
            }
        else if(!ans.next){
            pointer = node
            ans.next = pointer
        }
        else{
            pointer.next = node
            pointer = pointer.next
        }
        sum = sum/BigInt(10)
    }
    console.log(ans)
    return ans
};

addTwoNumbers(l1,l2)