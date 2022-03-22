
const express = require ('express')

const app =express()
const router= express.Router();

app. use(express.json());

const bcrypt = require('bcrypt')

const users= [];

app.get ('/users',(req,res)=>{
  res.json(users)
});


app.listen(5000)