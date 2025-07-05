function greet(){
    console.log("hello world");
}
greet();
greet();

function add(a,b){
    console.log(a+b);
}
add(1,2);
add(10,2);

function minus(a,b){
    return a-b;
}
 console.log(minus(1,2));
  console.log(minus(10,2));

  let multiply=function(a,b){
    console.log(a*b);
  }
multiply(2,5);

let greet1=(user)=>`good morning ${user}`;
console.log(greet1("raj"));


let add2=(a,b)=>`the sum of those two is ${a+b}`;
console.log(add2(3,4));