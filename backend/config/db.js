const mongoose=require("mongoose")
require("colors")
const db=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`DB CONNECTED`.bgGreen.black);
    } catch (error) {
        console.log(`UNABLE TO CONNECT ${error}`.bgRed.black);
        process.exit()
    }
}

module.exports=db