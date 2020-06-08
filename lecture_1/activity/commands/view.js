let fs=require("fs");
let path=require("path");
//src - t
//src - f

module.exports.view = function () {                //this view function will have an argument array
    let src=arguments[0];                          //user will pass 2 things src and mode(-t or -f)
    let mode=arguments[1];
    if(mode=="-t"){
        viewAsTree(src,"");
    }else{
        viewAsFlatFile(src,path.basename(src));
    }

}

function checkWhetherFile(src){
    return fs.lstatSync(src).isFile();
}
function getContent(src){
    return fs.readdirSync(src);
}
function viewAsFlatFile(src,toprint){
    if(checkWhetherFile(src)==true){
        console.log(toprint+"*");
    }else{
        console.log(toprint);

        let childNames=getContent(src);
        for(let i=0;i<childNames.length;i++){
            let childPath=path.join(src,childNames[i]);
            let cToprint=path.join(toprint,childNames[i]);
            viewAsFlatFile(childPath,cToprint);
        }
    }
}
//let src=process.argv[2];
//viewAsFlatFile(src,path.basename(src));
function viewAsTree(src,indent){
    if(checkWhetherFile(src)==true){
        console.log(indent+ path.basename(src)+" *");
    }else{
        console.log(indent+ path.basename(src));

        let childNames=getContent(src);

        for(let i=0;i<childNames.length;i++){
            let childPath=path.join(src,childNames[i]);
            viewAsTree(childPath,indent+"__");
        }
    }
}
//let src=process.argv[2];
//viewAsTree(src,"");