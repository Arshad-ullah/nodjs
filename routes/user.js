const express=require("express");
const res = require("express/lib/response");

const user=require("../models/User")

const myuser=express.Router();


myuser.post("/", async (req,res)=>
{
    

   

   const savedata = await user.create({
        
        subject: req.body.subject,
        author: req.body.author,

     });

   res.send(savedata);
    
})


myuser.get('/',async (req,res)=>
{
    const da=await user.find()
    res.send(da)
})




module.exports=myuser;