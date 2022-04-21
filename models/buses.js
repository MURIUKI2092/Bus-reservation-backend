const mongoose =require("mongoose");

const BusSchema = new mongoose.Schema({
  BusNo:{type:String,required:true,unique:true},
  townStage:{type:String,required:true},
  destinationStation:{type:String,required:true},
  price:{type:Number,required:true},
  departureTime:{type:String,required:true},
  ArrivalTIme:{type:String,required:true}
})

module.exports = mongoose.model("Buses",BusSchema)