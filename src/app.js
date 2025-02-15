const http=require("http");
const ip='127.0.0.1';
const port=process.env.PORT || 3000;
const fs=require("fs");
const path=require("path");


const server=http.createServer((req,res)=>{  
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

    if(req.url=="/" && req.method=='GET'){
      fs.readFile(path.resolve('src/index.html'),(err,data)=>{
        if(err){
          res.writeHead(404,{'content-type':'text/html'});
          res.end("File Not Found");
        }
        else{
          res.writeHead(200,{'content-type':'text/html'});
          res.end(data);
        }
      })
    }
    else if(req.url=="/app" && req.method=='GET'){
      res.writeHead(200,{'content-type':'text/html'});
      res.end("App module");
    }
    else{
      res.end("unknown error");
    }
});

server.listen(port,ip,()=>{
  console.log(`App running at http://${ip}:${port}`);
});