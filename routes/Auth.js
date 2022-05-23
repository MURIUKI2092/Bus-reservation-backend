const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");



//register a new User into the system

router.post("/register",async(req,res)=>{
  try{
    //implements The bcrypt to hash user password for security
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    const newUser = new User({
     firstName: req.body.firstName,
     lastName:req.body.lastName,
     email:req.body.lastName,    
      password:req.body.hashPassword
    })
    const  ourUser = await newUser.save();
    res.status(200).json(ourUser);
    return;

  }catch(err){
    res.status(500).json(err);
    return;
  }
})

// login a user

router.post("/login",async(req,res)=>{
  try{
    const user = await User.findOne({
      email:req.body.email
    })
    if(!user){
      return res.status(400).json("Kindly check your credentials");
    }
    const validation = await bcrypt.compare(req.body.password);
    if(!validation){
      return res.status(400).json("Kindly check your credentials");

    }
    const {password,...others}= user._doc;
    return res.status(200).json(others)


  }catch(err){
    res.status(500).json(err)
    return
  }
})

module.exports = router;