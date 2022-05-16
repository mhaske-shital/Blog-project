const express=require("express")
const { addBlog, allBlog, getSingleBlog, getDeleteBlog, EditBlog } = require("../controller/model-controller")
const { uploads } =require("../middleware/upload")
const router=express.Router()

router.route("/").get(allBlog)
router.route("/").post(uploads.single("image"),addBlog)

router.route("/:id").get(getSingleBlog).delete(getDeleteBlog).put(EditBlog)

module.exports=router