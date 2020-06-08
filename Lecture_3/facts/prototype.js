//all arrays have a parent Array
//if we want to add a new function on all the arrays than we will add  it on prototype of Array i.e. Array.prototype
//it is also called polyfill=> if your machine or browser does not have some functionality thn you write a polyfill

Array.prototype.sum=function(){
    let sum=0;
    for(let i=0;i<this.length;i++){
        sum+=this[i];
    }
    console.log(sum);
}
arr1=[1,2,3,4];
arr2=[3,4,5,6];
arr3=[5,6,7,8];

arr1.sum();        //as sum is added to the parent it can be accessed by all of its childs
arr2.sum();
arr3.sum();