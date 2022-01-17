const express=require("express");
const res = require("express/lib/response");

const  user=require("./routes/user");

const app=express();

const PORT= process.env.PORT || 3002;




const mongoose=require("mongoose");

require("dotenv/config");

app.use(express.json())

app.use("/user", user)

mongoose.connect(process.env.DB_CONNECT,()=>console.log("connect to db"));

app.listen(PORT,()=>console.log("how are you kdk"))