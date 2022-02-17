var express = require('express');
var router = express.Router();
const controller = require("../controllers/registerController")


router.get("/register",controller.indexRegister)

router.post("/register",controller.indexRegisterPost)



module.exports = router;