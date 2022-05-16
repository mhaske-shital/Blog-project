const express = require('express')
const app = express()
const env=require("dotenv")
env.config({path:"./config/.env"})

// db

const db=require("./config/db")
db()
const cors=require("cors")

// router
const blogs=require("./routes/blog-routes")
const auth = require("./routes/auth-routes")
const userRgister= require("./routes/user-routes")

app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.use("/api/v1/blogs",blogs)
app.use("/api/auth", auth)
// http://localhost:5000/api/user/register
app.use("/api/user",userRgister)


 
app.listen(process.env.PORT || 5000, () => console.log(`http://localhost:${process.env.PORT}`))