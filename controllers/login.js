const User = require('../models/user')
const bcrypt = require('bcrypt')




app.post ('/users/login',(req,res)=>{
  bcrypt.hash(req.body.password,10,(err,hash)=>{
    if (err){
      return res.status(500).json({
        error:err
      });

    }else{
      const user= {
        email:req.body.email,
        password:hash

      }
      res.status(201).json({
        message:"User has been logged in successfully"
      });
      
    }
    
  })


})
module.exports = Login();