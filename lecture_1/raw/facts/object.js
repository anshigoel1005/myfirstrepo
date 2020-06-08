//it is a key value pair
//used to represent any user or resource
let obj={
    name:"anshi",
    age:22,
    address:{
        state:"UP",
        city:"Hapur"
    },
    series:["Stranger Things","Money Heist","13 Reasons Why"],
    isFemale:true,
    sayHi:function(){
        console.log("i am a function");
    }
}

//TO GET
// console.log(obj);
// console.log(obj.series);
// console.log(obj.isFemale);
// obj.sayHi();

// //TO UDATE,SET,DELETE
// obj.isFemale=false;
// console.log(obj.isFemale);

// obj.friends=["Aayush","Jahanvi"];
// console.log(obj);

// delete obj.isFemale;
// console.log(obj);

console.log(obj.name);
let value = "series";               //series key of obj is stored in a variable key
console.log(obj[value]);           //to access its value we use this it will return arrray of series
console.log(obj.value);            //return undefined bcoz for obj.value it will search for value in obj which is not there in obj 
                                  //i.e. it will do literal matching itwill search the value not series in keys of obj

//when properties ar coming dynamically for updation/or when we dont know which property will be required to get updated 
//we we write a function
function updateProp(prop,val){
    obj[prop]=val;                //here property will act as a variable
    obj.prop=val;                 //this will generate a new key vale pair named prop at first it will have value 23 
                                  //thn it get updated to aayush
}
updateProp("age","23");
updateProp("name","aayush");
console.log(obj);