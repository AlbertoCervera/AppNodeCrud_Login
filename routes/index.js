var express = require('express');
var router = express.Router();

const controller = require("../controllers/crudCrontroller")


// --> Listar
router.get('/',(req,res,next) => {
  
  if(req.isAuthenticated()){
    return next()
  }

  return res.redirect("/login")
},

controller.indexListar
)




// --> Crear
router.get("/crear",(req,res,next) => {
  res.render("crear")
})
router.post("/crear",controller.crearPost)


// --> Eliminar
router.get("/eliminar/:id",controller.eliminar)


// --> Actualizar
router.get("/actualizar/:id",controller.actualizar)
router.post("/actualizar/:id",controller.actualizarPost)

module.exports = router;
