var num = 145;
var temp = num;
var sum = 0;

while (num != 0) {
    rem = num % 10;
    fact = 1;
    for (i = 1; i <= rem; i++) {
        fact = fact * i;
    }
    sum += fact;
    num = parseInt(num / 10);
}
if (sum == temp) {
    console.log(`${temp} is strong`);
}
else {
    console.log(`${temp} is not strong `)
}


var num = 153;
var temp = num;
var count = 0;
var sum=0;
while (num != 0) {
    num = parseInt(num / 10);
    count++;
}
num=temp
while (num != 0) {
    rem = num % 10;
    sum += rem ** count;
    num = parseInt(num / 10);
}
if(sum==temp){
    console.log(`${temp} is armstrong`);
}
else{
     console.log(`${temp} is not armstrong`);
}