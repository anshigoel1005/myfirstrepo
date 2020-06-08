//module.exports is an objet which is used with the functions which we can export

module.exports.myfn=function myfn(){
    console.log("I am exported function");
}

module.exports.myfn2=function another(){
    console.log("I am another function");
}

function private(){
    console.log("I am a private function cant be exported");
}

console.log("I am libModule I am compiled first and thn my data is exported");
//at first this line is printed coz it is compiled first soo that if there is any error like syntactical error thn it is known at the time of compilation
//for eg if any undefined wwritten
//vahgvss vxuhdbxsdj hjbxhjas
//this will give error
//before the starting of server or before tranferring data errors will be known to us

