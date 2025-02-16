/* CJS Modules */
// const t=require("./module");                               // file based module
// const os=require("os");                                 // node js
// const colors=require("colors");                         // 3rd party

// console.log( name, id );                                    // global
// console.log( t );                                   // property
//   console.log( t );                                      //  object

// console.log(os.cpus().length+" Threads");
// console.log(os.totalmem()/1073741824 + " GB RAM" );

// console.log( "This is error".red );
// console.log( "This is warning".yellow );
// console.log( "This is ok".green );


/* ESM Modules */
// import {x} from "./module.js";
// console.log( x );



const os=require("os");
const path=require("path");

// console.log( os.cpus().length );
// console.log( os.cpus() );

// console.log( os.arch() );
// console.log( os.arch() );

// console.log( os.totalmem()/1073741824 );
// console.log( os.freemem()/1073741824 );

// console.log( os.networkInterfaces() );

// console.log( os.platform() );
// console.log( os.type() );

// console.log( os.uptime()/3600 );
// console.log( os.userInfo() );


// const netList = require('network-list');

// netList.scan({}, (err, obj) => {
//     console.table(obj); // device object
// });



// console.log( path.normalize("./app") );
// console.log( path.normalize("app/blog/../") );

// console.log( path.basename("app/login") );
// console.log( path.basename("app/login.html",".html") );
// console.log( path.basename("C:\\temp\\myfile.html") );
// console.log( path.win32.basename("C:\\temp\\myfile.html") );

// console.log( path.dirname("app/home") );
// console.log( path.extname("app/home.php") );

// console.log( path.resolve("app/home") );
// console.log( path.resolve(__dirname) );
// console.log( path.resolve(__filename) );
// console.log( path.resolve("app","admin") );

// console.log( path.join("app","admin") );
// console.log( path.join("app","./admin") );


const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();

getNetworkDownloadSpeed();

async function getNetworkDownloadSpeed() {
  const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
  const fileSizeInBytes = 500000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
  console.log("Download",speed);
}

getNetworkUploadSpeed();

async function getNetworkUploadSpeed() {
  const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/catchers/544b09b4599c1d0200000289',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const fileSizeInBytes = 2000000
  const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
  console.log("Upload",speed);
}


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

// const event=require("events").EventEmitter;
// const emitter=new event();
// module.exports=emitter;

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


// require("./registration");
// require("./account");


// emitter.emit('register',new Date());
// emitter.emit('account',"sbi");


// const http=require("http");
// const ip='127.0.0.1';
// const port=process.env.PORT || 3000;
// const fs=require("fs");
// const path=require("path");


// const server=http.createServer((req,res)=>{  
    // res.write(req.url);
    // res.write(req.method);
    // res.write(req.headers.host);
    // res.write("Hello World");
    // res.statusCode=200;
    // res.setHeader('Content-Type','text/html');
    // res.writeHead(200,{'content-type':'text/html'});
    // res.write("<h1>Hello World</h1>");
    // res.write("<p>");
    // res.write(new Date().toLocaleString());
    // res.write("</p>");
    // res.end();

//     if(req.url=="/" && req.method=='GET'){
//       fs.readFile(path.resolve('src/index.html'),(err,data)=>{
//         if(err){
//           res.writeHead(404,{'content-type':'text/html'});
//           res.end("File Not Found");
//         }
//         else{
//           res.writeHead(200,{'content-type':'text/html'});
//           res.end(data);
//         }
//       })
//     }
//     else if(req.url=="/app" && req.method=='GET'){
//       res.writeHead(200,{'content-type':'text/html'});
//       res.end("App module");
//     }
//     else{
//       res.end("unknown error");
//     }
// });

// server.listen(port,ip,()=>{
//   console.log(`App running at http://${ip}:${port}`);
// });