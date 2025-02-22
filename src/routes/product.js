const express=require("express");
const router=express.Router();

router.get('/',(req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.status(200).send("Product page");
});
router.get('/:brand',(req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.status(200).send(req.params);
});
router.get('/:brand/:item',(req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.status(200).send(req.params);
});

module.exports=router;