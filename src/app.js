const express=require("express");
const app=express();
const path=require("path");
const product=require("./routes/product");
const admin=require("./routes/admin");

const bodyParser=require("body-parser");

require("dotenv").config();
const ip="127.0.0.1";
const port=process.env.PORT || 3000;

/* app.use((req,res)=>{
  res.status(200);
  res.setHeader('Content-Type','text/html');
  res.end(`<h1>Hello Express, ${new Date().toLocaleString()}</h1>`);
}); */


app.use('/product',product);
app.use('/admin',admin);

app.use(bodyParser.json());
 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 

app.use(express.static(path.resolve('src/public')));
app.use(express.static(path.resolve('node_modules/bootstrap/dist')));

// app.use((req,res,next)=>{
//   console.log(`App starts at ${new Date().toLocaleString()}`);
//   next();
// });

app.get('/',(req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.status(200).send(`<h1>Hello Express, ${new Date().toLocaleString()}</h1>`);
});
// app.get('/login',(req,res)=>{
//   res.setHeader('Content-Type','text/html');
//   res.status(200).send(`<h1>Login</h1>`);
// });
app.get('/search',(req,res)=>{
  
  const car=req.query.car, age=req.query.age;
  res.setHeader('Content-Type','text/html');
  res.status(200).send(car+", "+age);

});
// app.get('/contact.php',(req,res)=>{
//   res.setHeader('Content-Type','text/html');
//   res.redirect("/contact");
// });

app.get('/download',(req,res)=>{
  res.status(200).download(path.resolve("src/public/img/bat.svg"),(err)=>{
    res.status(404).send("file not found");
  });
})
app.get('/contact',(req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.status(200).send("Contact page");
})

// app.get('/product',(req,res)=>{
//   res.setHeader('Content-Type','text/html');
//   res.status(200).send("Product page");
// });
// app.get('/product/:brand',(req,res)=>{
//   res.setHeader('Content-Type','text/html');
//   res.status(200).send(req.params);
// });
// app.get('/product/:brand/:car',(req,res)=>{
//   res.setHeader('Content-Type','text/html');
//   res.status(200).send(req.params);
// });


app.get('/api',(req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.status(200).json({name:"avi",id:22});
});


// app.get("/login",(req,res)=>{
//   res.status(200).send(req.query);
// });

app.post("/login",(req,res)=>{
  const mail=req.body.email;
  const pass=req.body.pass;

  if( mail!="admin@techaltum.com" ){
    res.status(200).send("invalid email id");
  }
  else if(pass!=123456 ){
    res.status(200).send("Invalid password");
  }
  else{
    res.status(200).send("valid credentials");
  }
});



/* wild card handler */
app.get("/**",(req,res)=>{
  res.status(404).send(`<h1>Page not found</h1><p>Go to <a href="/">Homepage</a></p>`);
});


app.listen(port,ip,()=>{
  console.log(`app running at http://${ip}:${port}`)
});