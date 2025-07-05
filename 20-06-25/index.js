var num=1321; 
var temp=num;
var str="";
while(num!=0){
    rem=num%10;
    str+=rem;
    num=parseInt(num/10);
}
if(str==temp){
    console.log(`${temp} is palindrome`);
}
else{
       console.log(`${temp} is not palindrome`);
}

