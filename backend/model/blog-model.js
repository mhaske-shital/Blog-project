const mongoose=require("mongoose")

const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    shortDesc:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    publish:{
        type:Boolean,
        default:false

    },
    image:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model("blog",blogSchema)

