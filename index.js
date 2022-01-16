const express=require('express');

const data=require('./data.json')
const app=express();

const port=process.env.PORT || 3000

app.get('/',(req,res)=>
{
    res.send('how are you can you tell me about')
})

app.get('/player',(req,res)=>{
    res.send(data)
})

console.log(data)

app.listen(port,()=>console.log("running on:"+port))