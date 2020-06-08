//functions are first class citizens
//functions are variables

function sayHi(message){
    console.log("hi "+message);
}
console.log(sayHi);            //print function name
var c=sayHi("anshika");        //print Hi anshika
var d=sayHi("anshika","goel");  //print Hi anshika
var e=sayHi();                  //print Hi undefined
sayHi(10);                      //Hi 10
sayHi(null);                    //hi null
sayHi([2,3,4,5]);               //hi 2,3,4,5

let fn=function greater(){
    console.log("hiii");
    return 20;
}
console.log(fn);              //function name
console.log(fn());           //if return statement is written thn it will print the return value i.e 20 in this case else it will print undefined

function outer(param){
    console.log("outer function");
    console.log(param);             //name of inner function
    param();                        //to call inner function
}
//outer(8);                        //writing this statement will give error because now 8 is passed in param, and now param being a variable cannot call inner function
outer(function inner(){
    console.log("inner function");
})

