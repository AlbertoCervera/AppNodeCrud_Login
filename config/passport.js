const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const Users = require("../models/Users")

passport.use(
    new LocalStrategy(
        async (username,password,done) => {

            try {
                const usuario = await Users.findOne({
                    where:{username:username}
                })

                if(!usuario.verificarPassword(password)){
                    return done(null,false)
                }

                return done(null,usuario)

            } catch (error) {
                return done(null,false)
            }

           
        }   
    )
)

passport.serializeUser((usuario,callback) => {
    callback(null,usuario)
})

passport.deserializeUser((usuario,callback) => {
    callback(null,usuario)
})



module.exports = passport