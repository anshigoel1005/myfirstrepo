let input= process.argv.slice(2);   //to take the input
console.log(input);                 //will print the array of input

//let input1= process.argv.slice();  //at first two indices it will print links of src and dest thats y we use slice(2) so that it will print from 2nd index of the array
//console.log(input1);

console.log(Number(input[3]));       //by default numbers are printed in the form of strings to convert thm in number we type cast it

let input2=process.argv[2];           //in ths case it will element at index 2     
console.log(input2);
//slice will print from specific number till end of the array like from index 2 to end 