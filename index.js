const express =require('express') ; 
const router = express.Router() ; 
const app = express() ; 
const path = require('path');
const user = require('../models/user')
const conn=require('../db_con')
var flash = require('express-flash');
var session = require('express-session');
var bodyParser = require('body-parser');
router.get('/',(req,res)=>{
    res.send(`Hello ${req.user.username}. Your session ID is ${req.sessionID} 
   and your session expires in ${req.session.cookie.maxAge} 
   milliseconds.<br><br>
   <a href="/logout">Log Out</a><br><br>
   <a href="/secret">Members Only</a>`);
})
module.exports=router ; 