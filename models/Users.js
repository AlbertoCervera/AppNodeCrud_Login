const db = require("../config/db")
const Sequelize = require("sequelize")
const bcrypt = require("bcrypt")

const Users = db.define("users",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    }
},{
    hooks:{
        beforeCreate(Users){
            Users.password = bcrypt.hashSync(Users.password,bcrypt.genSaltSync(10))
        }
    }
})

Users.prototype.verificarPassword = function(password){
    return bcrypt.compareSync(password,this.password)
}

module.exports = Users