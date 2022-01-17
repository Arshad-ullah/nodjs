const mongoose=require("mongoose");

const userSchema=mongoose.Schema({

    subject: {
        type: String,
        required: true,
    },
    author:{
        type: String,
        required:true,
    }
});

module.exports=mongoose.model("user",userSchema);