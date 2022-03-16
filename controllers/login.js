const User = require('../models/user')
const bcrypt = require('bcrypt')




const Login=(req,res)=>{
  const {email,password}=req.body
  //finds the first occurrence of user in the database
  User.findOne({email:req.body.email})
  // then assigns  the User a user
  .then(user =>{
    // if no username or password given it returns a status code and an error message
    if(!email || !password){
      return res.statusCode (400).json({
        message:"Username or Password not present"
      })
    }
        // if no user it returns a status code and an error message
    if(!user){
      res.statusCode(404).json({
        error:' The user with that email was not found'})

    }
    // if user present it hashes the typed password and compare with the stored 
    // password in the database
    else{
      bcrypt.compare(req.body.password,user.password,(error,result)=>{
        if(error){
          //if error occurs during hashing it returns the error
          res.statusCode(500).json(error)
        }
        else if(result){
          //  if match then generate token for the user
          res.statusCode(200).json({
            message:"Login successful"});


        }
        else{
          res.status(403).json({
            error:"password do not match"})
        }

      })

    }
  })


}
module.exports = Login();