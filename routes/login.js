var express = require('express');
var router = express.Router();
const passport = require("passport")

const controller = require("../controllers/loginController")



router.get("/login",controller.indexLogin)

router.post("/login",
    passport.authenticate("local",{
        successRedirect:"/",
        failureRedirect:"/login",
        failureFlash: false,
        badRequestMessage: "No puede dejar los campos vacios"
    })
)



router.get("/cerrar-sesion",controller.cerrarSesion)

module.exports = router;