//The map() method creates a new array populated with the results of calling a provided function on every  in the calling array.
let a = [3, 6, 14, 16, 22];
function transform(ele) {
    if (ele % 2 == 0)
        return ele + 1;
    else
        return ele - 1;
}
let a2 = a.map(transform);    //call transform function for every element of old array
//console.log(newArr);
//console.log(a);                //map function will not hange the old array


//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
function test(ele) {
    for (let i = 2; i * i <= ele; i++) {
        if (ele % i == 0) {
            return false;
        }
    }
    return true;
}
let newArr = a2.filter(test);
//console.log(newArr);

function mymap(a, cb) {                     //we create a new function which will work in the same way as map fuction does
                                            //this will help to add new feature in language i.e to add new library
    let newArray = [];
    for (let i = 0; i < a.length; i++) {
        let ans = cb(a[i]);
        newArray.push(ans);
    }
    return newArray;
}
let final=mymap(a,transform);
console.log(final);