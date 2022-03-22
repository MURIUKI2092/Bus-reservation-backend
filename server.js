
const express = require ('express')

const app =express()
const router= express.Router();

app. use(express.json());

const bcrypt = require('bcrypt')

const users= [];

app.get ('/users',(req,res)=>{
  res.json(users)
});

app.post ('/users/login',(req,res)=>{
  bcrypt.hash(req.body.password,10,(err,hash)=>{
    if (err){
      return res.status(500).json({
        error:err
      });

    }
  })


})
app.listen(5000)