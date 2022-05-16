const blog=require("../model/blog-model")

exports.addBlog=async(req,res)=>{
    try {
        const result=await blog.create(req.body)
        res.json({
            count:result.length,
            success:true,
            message:"blog added",
            data:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:`Error ${error}`,
            data:null
        })
        
    }
}

exports.allBlog=async(req,res)=>{
    try {
        const result=await blog.find()
        res.json({
            count:result.length,
            success:true,
            message:"all blog ",
            data:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:`Error ${error}`,
            data:null
        })
        
    }
}

exports.getSingleBlog=async(req,res)=>{
    try {
        const result=await blog.findById(req.params.id)
        res.json({
            
            success:true,
            message:"single blog ",
            data:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:`Error ${error}`,
            data:null
        })
        
    }
}

exports.getDeleteBlog=async(req,res)=>{
    try {
        const result=await blog.findByIdAndDelete(req.params.id)
        res.json({
            
            success:true,
            message:"single blog delete ",
            data:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:`Error ${error}`,
            data:null
        })
        
    }
}

exports.EditBlog=async(req,res)=>{
    try {
        const result=await blog.findByIdAndUpdate(req.params.id,req.body)
        res.json({
            
            success:true,
            message:"edit blog  ",
            data:result
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:`Error ${error}`,
            data:null
        })
        
    }
}