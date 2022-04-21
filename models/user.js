const mongoose = require("mongoose")

const UserSchema= new mongoose.Schema({
  _id: Database.Schema.Types.ObjectId(),
  FirstName:{
  type:String,
  unique:false,
  required:true,
  },
  LastName:{
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
    minlength:6,
    required:true

  },
  isAdmin:{
    type:Boolean,
    default:false
  },
},{timestamps:true})

module.exports=mongoose.model('User',UserSchema);