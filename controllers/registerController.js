const Users =require("../models/Users")

exports.indexRegister = (req,res,next) => {
    res.render("./auth/register")
}


exports.indexRegisterPost = (req,res,next) => {
    const {username,email,password} = req.body

    Users.create({username,email,password})
        .then(() => res.redirect("/login"))
        .catch(() => res.redner("/register"))
    
}
