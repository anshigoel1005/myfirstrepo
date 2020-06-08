//we are writing our own module which we will use in user.js
//to use functions of libModule we have to require it first
let lib=require("./libModule");
lib.myfn();
lib.myfn2();
//lib.private();  //will give error