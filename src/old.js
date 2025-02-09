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