const User =require("../models/user")
const Register=(req,res)=>{
  const {FirstName,LastName,email,password}=req.body
  if(req.password.length<6){
    return res.statusCode(400).json({
      message:"password length is shorter than required"
    })
  }

  bcrypt.hash(req.body.password,(error,success)=>{
    if (error){
      res.statusCode(500).json(error)


    }
    else if(success){
      User.create({
        FirstName,LastName,email,password
      }).then(user=>{
        res.statusCode(200).json({
          message:"User created successfully",
          user,
        })
            })


    }else{
      res.statusCode(401).json({
        message:"user not successfully created",
        error:error.message
      })
    }
  })


}
module.exports=Register()