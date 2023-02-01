const mongoose = require('mongoose') ; 
const quizz=require('../models/quizz') ;
const express =require('express') ; 
const router = express.Router() ; 
const app = express() ; 
const path = require('path');
const conn=require('../db_con')
router.post('/addquizz',(req,res)=>{
    console.log('CALLED') ;
    const Quizz = new quizz (
{
        
    userid:'dadadadd' ,
    quizzTitle:'lorem ipsum dorum ', 
    question:['xsxsxs'],

}    )
Quizz.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error ,
      });
    }
  );
}

)
module.exports=router ; 