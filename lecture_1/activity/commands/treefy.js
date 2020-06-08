let fs=require("fs");
let path=require("path");
let uniqid=require("uniqid");

module.exports.treefy = function () {
    let src = arguments[0];
    let dest = arguments[1];
    let buffer = fs.readFileSync(path.join(src,"metadata.json"));    //to read from file metadata.json
    let cElem = JSON.parse(buffer);               //data stored in buffer is in the hexa decimal format so it covert it we use parse

    treefyFn(src,dest,cElem);
}
function treefyFn(src,dest,cElem){
    if(cElem.isFile==true){
        let srcPath=path.join(src,cElem.newName);          //fetch it by new name
        let destpath=path.join(dest,cElem.oldName);        //create it with old name
        fs.copyFileSync(srcPath, destpath);                //copy it from src to destination
        console.log(`${cElem.oldName} copied to dest`)
    }else{
        let dirName=cElem.name;
        let dirPath=path.join(dest,dirName);       //directory path
        fs.mkdirSync(dirPath);                    //create directory using the path stored in dirPath
        console.log(`Directory ${cElem.name} created inside ${dest}`);

        for(let i=0;i<cElem.children.length;i++){
            treefyFn(src,dirPath,cElem.children[i]);              //dirPath is changing this time
        }
    }
}