const x=require("./app");

x.on("register",()=>{
    console.log(`user registration started}`);
});
x.once("register",(date)=>{
    console.log(`user registered completed on  ${date.toLocaleString()}`);
});