//login routes 
const express =require('express') ; 
const router = express.Router() ; 
const app = express() ; 
const path = require('path');
const user = require('../models/user')
const conn=require('../db_con')
var flash = require('express-flash');
var session = require('express-session');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt') ; 
const authcontroller=require('../controllers/authcontroller')
var urlencodedParser = bodyParser.urlencoded({ extended: true })
const passport = require('passport');
app.use(express.static('../projet_a/dist/projet_a'));

router.get('/',(req,res)=>{
res.sendFile('/Users/incoordi/Desktop/projet-angular/projet_a/dist/projet_a/')
    console.log('router used') ; 
}); 
router.post('/adduser',authcontroller.adduser ) ;
router.post('/verification:username:password',(req,res)=>{


       })
       router.post('/auth', passport.authenticate('local', { 
        failureRedirect: '/login-failure', 
        successRedirect: '/login-success'
      }), (err, req, res, next) => {
        if (err) next(err);
      });
      router.post('/login-failure',(req,res)=>{
res.send('wrong username or password') ; 
      })
 module.exports = router  ;  
 
