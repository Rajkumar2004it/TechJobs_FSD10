//push
var fsd=["raj","saketh","vignesh","tarun","kashyap"];
fsd.push("vamsi");
console.log(fsd);

//pop
var fsd=["raj","saketh","vignesh","tarun","kashyap"];
fsd.pop("vigndesh");
console.log(fsd);

//shift
var fsd=["raj","saketh","vignesh","tarun","kashyap"];
fsd.shift();
console.log(fsd);

//unshift
var fsd=["raj","saketh","vignesh","tarun","kashyap"];
fsd.unshift("akhil");
console.log(fsd);

//splice
var fsd=["raj","saketh","vignesh","tarun","kashyap"];
fsd.splice(3,0,"srikanth");
console.log(fsd);

//slice
var fsd=["raj","saketh","vignesh","tarun","kashyap"];
var fsd1=fsd.slice(0,1);
console.log(fsd1);

//sort
var fsd=["raj","saketh","vignesh","tarun","kashyap"];
fsd.sort();
console.log(fsd);

//imdexOf
var fsd=["raj","saketh","vignesh","tarun","kashyap"];
console.log(fsd.indexOf("tarun"));

//lastIndexOf
var fsd=["raj","saketh","vignesh","tarun","kashyap","tarun"];
console.log(fsd.lastIndexOf("tarun"));

//foreach
var fsd=[1,10,2,33,22,18];
fsd.forEach(multiply2);
function multiply2(i){
    console.log(i*2);
}

//map
var fsd=[2,22,,1,23,45,30];
fsd.map(multiply);
function multiply(i){
    console.log(i*3);
}


//filter
var arr=[2,22,8,1,23,45,30];
var newArr=arr.filter((i)=>i%2==0);
console.log(newArr);

//findIndex
var arr=[2,22,8,1,23,45,30];
var newArr=arr.findIndex((i)=>i>30);
console.log(newArr);

//find
var arr=[2,33,24,31,45,21];
var newArr=arr.find((i)=>i>40);
console.log(newArr);

//reduce
var arr=[2,33,24,31,45,21];
var newArr=arr.reduce((acc,i)=>acc+i);
console.log(newArr);

//join
var fsd=["raj","saketh","tarun","kashyap"];
var newArr=fsd.join("");
console.log(newArr);

//concat
var smash=["raj","saketh","tarun","kashyap"];
var study=["vignesh,srikanth,akhil,raviteja"];
var fsd=smash.concat(study);
console.log(fsd);



