const express = require("express");
const { userCreated, addAddresss } = require("../controller/user-controller");

const router = express.Router();

router.route("/register").post( userCreated)

module.exports = router;