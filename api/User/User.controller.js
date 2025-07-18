const express = require("express");
const router = express.Router();
const service=require("./User.service.js")

router.post("/register",service.registerMember);


module.exports = router;
