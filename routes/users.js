const express =require("express");
const router = express.Router();
const Database = require('mongoose')
const bcrypt = require ('bcrypt')

const User = require('../models/user')


app.post('/users/signup',(req,res)=>{
  bcrypt.hash(req.body.password,10,(err,hash)=>{
    if (err){
      return res.status(500).json({
        error:err
      });
    }else{
      const user ={
        
        FirstName: req.body.FirstName,
        LastName:req.body.LastName,
        email:req.body.email,
        password:hash

      }
      users.push(user);
      res.json(user);
      res.status(201).json({
        message:`${req.body.FirstName}'s account created`
      });

    
      
    }
  })
 
});

module.exports = router;