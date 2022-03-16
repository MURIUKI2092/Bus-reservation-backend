const Database =require('mongoose')

const UserTable= new Database.Schema({
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

  
})
const User= Database.model("user",UserTable
)
module.exports=User