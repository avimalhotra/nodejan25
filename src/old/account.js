const x=require("./app");

x.once("account",(x)=>{
    console.log(`account opened in ${x} bank`);
});
