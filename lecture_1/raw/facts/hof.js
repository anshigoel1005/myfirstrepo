//high order funtions => functions that take smaller functions as an input
//smaller functions composed into larger functions

function getfirstname(fullname){
    return fullname.split(" ")[0];
}
function getlastname(lastname){
    return lastname.split(" ")[1];
}
function greater(fullname,callback){
    let message=callback(fullname);
    console.log("hii "+message);
}
greater("Anshika Goel",getfirstname);
greater("Anshika Goel",getlastname);