//classes
class hello{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    greet(){
        console.log(`${this.fname} ${this.lname} ${this.age}`)
    }
}
var m1=new hello("raj" ,"kumar" ,21);
m1.greet();


class main{
    constructor(phone,brand,cost){
        this.phone=phone;
        this.brand=brand;
        this.cost=cost;
    }
    mobile(){
        console.log(`${this.phone} ${this.brand} ${this.cost}`);
    }
}
var n1=new main("realme" ,"c25" ,40000);
n1.mobile();

//inheritance methods
class mainclass{
      greet(){
        console.log("hello world");
      }
}
class subc extends mainclass{
    wish(){
        console.log("bye world")
    }
    // greet(){
    //     super.greet();
    //     console.log("hi world");
    // }
}
var s1=new subc();
s1.wish();
s1.greet();

//inheritance constructors
class mainclass1{
    constructor(fname){
        this.fname=fname;
    }
    greet(){
        console.log("hello world");  
    }
}
class subclass extends mainclass1{
    // constructor(fname,age){
    //     super(fname);
    //     this.age=age;
    // }
    wish(){
         console.log(`${this.fname} is ${this.age} years old `);
    }
}
var ss1=new subclass("raj kumar" );
ss1.greet();
ss1.wish();