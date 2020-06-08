let fs=require("fs");                        //to use methods of fs we have to import/require fs 

let path=require("path");                   //to join path

function checkWhetherFile(src){
    return fs.lstatSync(src).isFile();       //it is an inbuilt method of fs to check wheher the given path is file. It will return true or false
}
function getContent(src){
    return fs.readdirSync(src);             //to get content of directory i.e. names
}
function viewAsFlatFile(src,toprint){
    if(checkWhetherFile(src)==true){       //to check if its a file or not if file thn print src else if directory print check for its children
        console.log(toprint+"*");
    }else{
        console.log(toprint);             //print directory and check for children

        let childNames=getContent(src);   //all the children of that particular directory is returend to childnames

        for(let i=0;i<childNames.length;i++){
            let childPath=path.join(src,childNames[i]);      //path.join will add the / between new path and previous path i.e it will join both the paths
            let cToprint=path.join(toprint,childNames[i]);   //join the names like d10/d20
            viewAsFlatFile(childPath,cToprint);
        }
    }
}
//let src=process.argv[2];
//viewAsFlatFile(src,path.basename(src));

function viewAsTree(src,indent){                             //indent variable is to give spaces
    if(checkWhetherFile(src)==true){
        console.log(indent+ path.basename(src)+" *");       //path.basename gives the last part of the path
    }else{
        console.log(indent+ path.basename(src));            //we have to print only the current content

        let childNames=getContent(src);

        for(let i=0;i<childNames.length;i++){
            let childPath=path.join(src,childNames[i]);
            viewAsTree(childPath,indent+"__");
        }
    }
}
let src=process.argv[2];
viewAsTree(src,"");