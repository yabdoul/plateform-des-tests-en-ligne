const express = require('express');
const http = require('http');
const index = require('./routes/index')
var bp = require('body-parser');
const session =  require('express-session')
const user =  require('./models/user')
const app = express();
const login = require('./routes/login')
const pass = require('./config/passport');
const passport=require('passport') ;
const MongoStore = require('connect-mongo');
const passportconfing = require('./config/passport')
const mongoose=require('mongoose') ;
const db= require('./db_con');
const quizz= require('./routes/quizz_routes') ; 

app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongoUrl: db.client.s.url })
}));
//initializing passport
require('./config/passport');
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.static('./projet_a/dist/projet_a/'));
app.use('/login',login) ; 
app.use('/index',index) ; 
app.use('/quizz',quizz) ; 
const server = http.createServer(app);
server.listen(3001, () => console.log(`App running on: http://localhost:${3080}`));