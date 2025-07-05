var arr=[2,3,4,5,6];
var[a,b]=arr;
console.log(a,b);
[a,b]=[b,a]
console.log(a,b);

var arr=[2,3,4,5,6];
var[a,b,...c]=arr;
console.log(c);

var arr=[2,3,4,99,21];
var[a,b]=arr;

function add(...arr){
    return arr.reduce((acc,i)=>acc+i);
}
console.log(add(5,3,33,3));

