const mongoose = require("mongoose")

const userShema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    inAdmin:{
        type:Boolean,
        required: true,
        default: false
    }
},{timestamps:true})

module.exports = mongoose.model("user",userShema)