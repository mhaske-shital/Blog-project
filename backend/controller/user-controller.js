
const user = require("../model/user-model")
const bcrypt = require("bcryptjs")
exports.userCreated = async(req,res) => {
    let {password}=req.body
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password,salt)
    try {
        const result = await user.create({
            name:req.body.name,
            email:req.body.email,
            password
            
        })
        res.json({
            success: true,
            message: "user created",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Error" + error,
            result:null
        })
    }
}
