//functions are objects

function fn(){
    console.log("I am a function");
}
fn.myprop="I am a property of a function";
fn.myfn=function(){
    console.log("I am a method of an object that could be called");
}
console.log("...............");
console.log(fn);
console.log(fn.myprop);
fn.myfn();                     
fn();                         //functions are objects that can be called