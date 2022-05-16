const user = require("../model/user-model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.login =async(req,res)=> {
    try {
        const { email, password } = req.body
        const userData = await user.findOne({ email })  //email:email
        if (!userData) {
            return res.status(400).json({
                success: false,
                message: "email not found"
            })
        }

      const verify = await bcrypt.compare(password,userData.password)
        if (!verify) {
            return res.status(400).json({ 
                success: false,
                message:"password not found"
              }) 
        }
        const token = jwt.sign({userId:userData._id},process.env.JWT_SECRET_KEY)
        res.json({
            success:true,
            message: "You Are Login Successfully",
            result:userData, 
            token
        })
    } catch (error) {
        res.json({
            success: false,
            message:"invalid password and email " + error
          }) 
    }
}