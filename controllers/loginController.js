


exports.indexLogin = (req,res,next) => {
    res.render("./auth/login")
}


exports.cerrarSesion = (req,res,next)=> {
    req.session.destroy(()=>{
      res.redirect("/login")
    })
  
}