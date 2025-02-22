const express=require("express");
const router=express.Router();

router.get('/',(req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.status(200).send("hello admin");
});
router.get('/add',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send("admin add others");
  });
router.get('/dashboard',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send("admin dashboard");
});

module.exports=router;