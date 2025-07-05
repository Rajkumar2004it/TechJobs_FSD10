//object literal
var student={
   studentName:"Rajkumar",
   studentAddress:"hyd",
   studentMarks:100 
}
console.log(student.studentName);

//new reference
var student1=new Object();
student1.student1Name="Ajay"
student1.student1Address="miyapur"
student1.student1Marks=90
for(let a in student1){
    console.log(a + " : " + student1[a]);
}

/*functional constructors
function phone(name,price,storage,camera){
    this.name=name;
    this.price=price;
    this.storage=storage;
    this.camera=camera;
}
var p1=new phone("realme",50000,"256gb","64mp");
var p2=new phone("redme",25000,"128gb","48mp");
var p3=new phone("samsung",125000,"256gb","128mp");
var all=[p1,p2,p3];
for(let a of all){
    for(let key in a){
        console.log(key+ " : " + a[key])
    }
}
*/

function phone(name,price,storage,camera){
    this.name=name;
    this.price=price;
    this.storage=storage;
    this.camera=camera;
}
var p1=new phone("realme",50000,"256gb","64mp");
var p2=new phone("redme",25000,"128gb","48mp");
var p3=new phone("samsung",125000,"256gb","128mp");
var all=[p1,p2,p3];
for(let a of all){
    if(a.name=="realme"){
        for(let key in a){
            console.log(key+ " : "+ a[key]);

        }
    }
}

//function call
var studentt={
    studenttFirstName:"Raj",
    studenttLastName:"kumar",
    studenttAddress:"hyd",
    studenttMarks:"100",
    studenttFullName:function(city,marks){
        return this.studenttFirstName+this.studenttLastName+" from"+ city + " with" + marks + " marks";
    }
}
console.log(studentt.studenttFullName());

var mobile={
   brand:"vivo",
   model:"v20",
   mobilename:function(){
    return this.brand + this.model;
   }
}
console.log(mobile.mobilename());

var studentt2={
    studenttFirstName:"vig",
    studenttLastName:"nesh"

}
console.log(studentt.studenttFullName.call(studentt2," kphb"," 99"));





