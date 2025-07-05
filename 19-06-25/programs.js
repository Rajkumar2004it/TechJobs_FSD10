var num=12345;
var count=0;
var rem;
while(num!=0){
    rem=num%10;
    count+=rem;
    num=parseInt(num/10);
}
console.log(count);



var num=12347777777777;
var count=0;

while(num!=0){
    count++;
    num=parseInt(num/10)
}
console.log(count);



var num=12345;
var temp=0;
while(num!=0){
    temp=num%10;
    console.log(temp);
     num=parseInt(num/10)
}

var num=122321;
var temp=0;
var str=" ";
while(num!=0){
    temp=num%10;
    str+=temp;
     num=parseInt(num/10);
}
console.log(str);
if(str==num){
    console.log("yes palindrome");
}
else{
     console.log("not palindrome");
}


var num=153;
var temp=num;
var count=0,sum=0;
while(num!=0){
num=parseInt(num/10);
count++;
}
num=temp;
while(num!=0){
 rem=num%10;
 sum+=rem**count;
 num=parseInt(num/10);
}
if(sum==temp)
    console.log(`${temp} is armstrong`);
else
    console.log(`${temp} is not armstrong`);



var num=145;
var temp=num;
var count=0,sum=0;
while(num!=0){
rem=num%10;
fact=1;
for(i=1;i<=rem;i++){
    fact=fact*i;
}
 sum+=fact;
 num=parseInt(num/10);
}
if(sum==temp)
    console.log(`${temp} is strong`);
else
    console.log(`${temp} is not strong`);
