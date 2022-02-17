var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index')
const indexLogin = require("./routes/login")
const indexRegister = require("./routes/register")


const session = require('express-session');
const passport = require('./config/passport');

//Primero van las views,luego la BD,luego el session,y luego el passport => si no va mal.

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//Conectar a DB

const db = require("./config/db");


require("./models/Cards")
db.sync()
  .then(() => console.log("Conectado a Base de datos"))
  .catch(error => console.log(error))

//Inicializamos session
app.use(session({
  secret: "secretPassword",
  resave: true,
  saveUninitialized: false
}))

//Inicializamos passport
app.use(passport.initialize())
app.use(passport.session())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);
app.use("/",indexLogin)
app.use("/",indexRegister)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
