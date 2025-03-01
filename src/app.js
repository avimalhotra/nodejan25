const express=require("express");
const app=express();
const path=require("path");
const product=require("./routes/product");
const admin=require("./routes/admin");
const parseurl=require("parseurl");

const bodyParser=require("body-parser");
const cookie=require('cookie-parser');

const session=require("express-session");

app.set('trust proxy', 1); 

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

app.use(cookie('secret'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 


app.use(session({
  secret:"session",
  resave:false,
  saveUninitialized:true,
  cookie:{secure:false,maxAge:5000}
}));

app.use(express.static(path.resolve('src/public')));
app.use(express.static(path.resolve('node_modules/bootstrap/dist')));

/* app.use((req,res,next)=>{
  if (!req.session.views) {
    req.session.views = {}
  }
  const pathname=parseurl(req).pathname;

  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

  console.log(`App starts at ${new Date().toLocaleString()}, ${req.session}`);
  next();
}); */

function authenticate(req,res,next){
  if(new Date().getHours()<12){ next();}
  else{ res.status(403).send("not authorized") }
}

app.get('/',(req,res)=>{

  res.setHeader('Content-Type','text/html');
  
  // res.cookie("pin","201301",{maxAge:86400000});
  // res.cookie("state","up",{signed:true});

  // if( Object.entries(req.cookies).length ){ 
  //   console.log(req.cookies);
  //   console.log(req.signedCookies);
  // }
  // else{ console.warn("no cookies found")}
  
  // res.status(200).send(`<h1>${req.cookies.name}, ${req.cookies.city}</h1>`);


  // res.status(200).send(`<h1>Express </h1> <p>${req.sessionID}, ${req.session.views['/']}</p>`);
  res.status(200).send(`<h1>Express JS </h1>`);

});


app.get('/login',authenticate,(req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.status(200).sendFile(path.resolve('src/public/login.html'));
});


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