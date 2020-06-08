let input = process.argv.slice(2);
let viewFile=require("./commands/view");                //to use view function of view.js file we have to require it
let untreefyFile=require("./commands/untreefy");
let treefyFile=require("./commands/treefy");
//console.log(input);
let cmd = input[0];   //in cmd we will have first entry of input
switch (cmd) {
    case "view":
        viewFile.view(process.argv[3],process.argv[4])     //node tpp.js view src -t , src is at index 3 and mode at index 4 soo we passed content of index 3 and 4 in iew function
        break;
    case "treefy":
        treefyFile.treefy(process.argv[3],process.argv[4]);
        break;
    case "untreefy":
        untreefyFile.untreefyFn(process.argv[3],process.argv[4]);
        break;
    case "help":
        console.log("Help Command Implemented");
        break;
    default:
        console.log("Work Command");
        break;
}