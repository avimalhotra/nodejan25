const fs=require('fs');
const path=require("path");

// const res=fs.readFileSync("src/data.txt",{encoding:'utf-8'});
// const res=fs.readFileSync(path.resolve("src/data.txt"),{encoding:'utf-8'});


// fs.readFile(path.resolve("src/data.txt"),{encoding:'utf-8'},(err,res)=>{
//   // if(err){ console.warn(err)}
//   // else{ console.log(res) }
  
//   fs.stat(path.resolve("src/data.txt"),(err,res)=>{
//     if(err){ console.warn(err)}
//     else{ 
//       console.log(res.size);
//       console.log(res.isDirectory() );
//       console.log(res.isFile() );
//      }
//   });

// });

// fs.writeFile(path.resolve("src/data.txt"),"hello world",{encoding:'utf-8'},(err)=>console.warn(err));
// fs.appendFile(path.resolve("src/data.txt"),"hello world\n",{encoding:'utf-8'},(err)=>console.warn(err));


// fs.unlink(path.resolve("src/data.txt"),err=>console.warn(err));

// try{
//   fs.unlink(path.resolve("src/data.txt"),err=>console.warn(err));
// }
// catch(err){
//   console.warn(err);
// }

// console.log( "done" );


/* events  */

/* fs.ReadStream(path.resolve("src/data.txt")).on("open",()=>{
  console.log("open");
}); */

const event=require("events").EventEmitter;
const emitter=new event();
module.exports=emitter;

// emitter.on("done",(user,x)=>{
//   console.log(`event done ${user}`);
//   // x.done=false;
// });
// emitter.on("done",(user,x)=>{
//   // console.log(`again event done ${user}`);
//   if(x.done){ console.log(`again event done ${user}`) }
// });

// emitter.once("done",(user,x)=>{
//     console.log(`event done ${user}`);
// });

// function callOnce(){
//   console.log("call onced");
//   emitter.removeListener("done",callOnce);     // remove event
// }

// emitter.on("done",callOnce);


// emitter.emit("done"," by avinash",{done:true});
// emitter.emit("done"," by isha",{done:true});



require("./registration");
require("./account");


emitter.emit('register',new Date());
emitter.emit('account',"sbi");