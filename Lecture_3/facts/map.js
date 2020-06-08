//maps using polyfill

Array.prototype.mymap=function mymap(cb){
    let nArr=[];
    for(let i=0;i<this.length;i++){
        let ans=cb(this[i]);
        nArr.push(ans);
    }
    return nArr;
}
function transform(elem){
    if(elem%2==0){
        return elem+1;
    }else{
        return elem-1;
    }
}
let arr1=[1,2,3,4,5];
let tArr1=arr1.mymap(transform);
console.log(tArr1);

let arr2=[12,21,32,41,54];
let tArr2=arr2.mymap(transform);
console.log(tArr2);