const router = require("express").Router();
const User = require("../models/user");
const CryptoJs = require("crypto-js");
const jwt = require('jsonwebtoken');


// Register/ SignUp function
router.post("/register",async(req,res)=>{

  //checking whether there are inputs from the userSide

  if(!req.firstName|| !req.lastName ||!req.email||!req.password){
    res.status(500).json({
      message:"Ensure all the fields are filled to continue"
    })

  }
  else if(req.password.length<6){
    res.status(400).json({
      message:"password is shorter than the required length"
    })
  }
  const newUser = newUser({
    firstName : req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:CryptoJs.AES.encrypt(req.body.password
      ,process.env.secret_pass).toString() ,

  });
  try{
    const SavedUser = await newUser.save();
    res.status(200).json(SavedUser)
  }catch(err){
    res.status(500).json({
      message:"registration error"
    })
  }
});

// Login function
// email and passwords are used

router.post("/login",async(req,res)=>{
  try{
    const user = await User.findOne({email:req.body.email})

    if(!user){
      res.status(401).json("Wrong credentials")
    }
    const securedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.secret_pass);
      const OriginalPassword = hashedPassword.toString(CryptoJs.enc.Utf8)

      if (OriginalPassword !== req.body.password){
        res.status(401).json("Wrong credentials")
  
      }
      const accessToken =jwt.sign({
        id:user._id,
        isAdmin:user.isAdmin
  
      },process.env.jwt_key,
      {expiresIn:"3d"})
  
      const {password ,...others}= user._doc;
      res.status(200).json({...others,accessToken} )
    }catch(err){
      res.status(500).json(err)
    }
  
  })
  
  
  
  module.exports=router