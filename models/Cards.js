const db = require("../config/db")
const Sequelize = require("sequelize")

const Cards = db.define("cards",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING
    },
    url:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    }
})

module.exports = Cards