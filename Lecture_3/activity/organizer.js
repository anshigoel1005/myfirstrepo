let fs = require("fs");
let path = require("path");
let utility = require("./utility");

function checkWhetherFile(src) {
    return fs.lstatSync(src).isFile();      //fs.lstatSync() method used to refer to a file or directory
}
function getContent(src) {
    return fs.readdirSync(src);             //returns an array with all the file names or objects in the directory
}
function getExtension(src) {
    let ext=src.split(".").pop();    //it will split the src from . and convert it into an array and thn pop function will 
                                        //pop the last element of array which is extension      
    return ext;
}
function getCategory(ext) {
    let types=utility.types;
    for(let category in types){
        for(let i=0;i<types[category].length;i++){
            if(ext==types[category][i]){
                return category;
            }
        }
    }
    return null;
}
function sendFiles(src, dest, category) {
    let categoryPath=path.join(dest,category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let fName=path.basename(src);
    let cPath=path.join(categoryPath,fName);
    fs.copyFileSync(src,cPath);
}
function organizer(src, dest) {

    if (checkWhetherFile(src) == true) {
        let ext = getExtension(src);
        let category = getCategory(ext);
        if (category == null) {               //if the file doesnot belong to any of the defined 4 categories thn put it in others category
            category = "others";
        }
        sendFiles(src, dest, category);
    } else {

        let childNames = getContent(src);
        for (let i = 0; i < childNames.length; i++) {
            if(childNames[i]=="organised_files"){
                continue;
            }
            let childPath = path.join(src, childNames[i]);
            organizer(childPath, dest);
        }
    }
}
let src = process.argv[2];
let dest = path.join(src, "organized_files");
if (fs.existsSync(dest) == false) {           //this method will check if file already exist in the given path dest or not
    fs.mkdirSync(dest);                      //if it doesnot exit then create a directory at sam path and name
}
organizer(src, dest);