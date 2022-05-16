const multer = require("multer")
const path =require("path")

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null,"public/uploads")
    },
    filename: function (req, file, cb) {
        const fn = Date.now() + path.extname(file.originalname)
        req.body.image=`uploads/${fn}`
        cb(null,fn)
    }
})

exports.uploads = multer({
    storage:storage
})