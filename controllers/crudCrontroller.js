const Cards = require("../models/Cards")


exports.indexListar = async (req,res,next) => {
    const tarjetas = await Cards.findAll()
    res.render('index', { 
        title: 'Express',
        tarjetas
    });
}


exports.crearPost = (req,res,next) => {
    const {nombre,url,descripcion} = req.body
    
    Cards.create({nombre,url,descripcion})
        .then(() => res.redirect("/"))
        .catch(() => res.redirect("/crear"))
}


exports.eliminar = (req,res,next) => {
    
    const id = req.params.id
    Cards.destroy({
        where:{
            id:id
        }
    }).then(() => res.redirect("/")).catch(() => res.redirect("/"))
}


exports.actualizar = async (req,res,next) => {
    const id = req.params.id
    const tarjeta = await Cards.findAll({
        where:{
            id:id
        }
    })

    res.render("actualizar",{
        title: "actualizar",
        tarjeta
    })
}

exports.actualizarPost = async (req,res,next) => {
    const id = req.params.id
    const {nombre,url,descripcion} = req.body
    Cards.update({nombre,url,descripcion},{
        where:{
            id:id
        }
    }).then(()=> res.redirect("/"))
} 