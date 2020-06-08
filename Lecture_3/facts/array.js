//arrays are objects where index of array is key

let array=[1,
           1.1,
           "I am a string",
           [1,2, 3,4],
           {key:"value inside an array"},
           function sayHii(){
             console.log("I am function inside array");}
]
for(let i in array){
    console.log(i);
    console.log(array[i]);
    console.log("''''''''''''''''''''''''''");
}
array[5]();
array["5"]();

array[45]=75;          //because arrays are objects
console.log(array);

array.lastvalue="Hello I am last value";           //we can add new value like we did in objects adding a key value pair
console.log(array);
