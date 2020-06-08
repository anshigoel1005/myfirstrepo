//library vs framework

function library(data){
    for(let i=2;i*i<data;i++){
        if(data%i==0){
            return false;
        }
    }
    return true;
}
//devloper's code
console.log("Number is prime?"+library(23));

//we pass data as well as callback functions
function framework(data,scb,fcb){          //scb and fcb are success and failure call back
    for(let i=2;i*i<data;i++){
        if(data%i==0){
            return fcb();
        }
    }
    return scb();
}
let {exec}=require("child_process");        //require is just like import
//developers's code inversion of control
function scb(){
    console.log("Number is prime"); 
    exec('start chrome').unref();           //this will open chrome       
}
function fcb(){
    console.log("Number is not prime");
    exec('calc').unref();                  //this will open the calculator
}

framework(23,scb,fcb);