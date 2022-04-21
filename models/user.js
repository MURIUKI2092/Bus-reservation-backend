const mongoose = require("mongoose")

const UserSchema= new mongoose.Schema({
  
  firstName:{
  type:String,
  unique:false,
  required:true,
  },
  lastName:{
  type:String,
  unique:false,
  required:true,
  },
  email:{
    type:String,
    unique:true,
    required:true,
    lowercase:true
  },
  password:{
    type:String,
    

  },
/*   isAdmin:{
    type:Boolean,
    default:false
  }, */
},{timestamps:true})

module.exports=mongoose.model('User',UserSchema);