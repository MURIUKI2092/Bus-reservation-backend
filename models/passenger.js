const mongoose = require("mongoose")

const PassengerSchema  = new mongoose.Schema({
  passengerName:{type:String,
  required:true,},
  passengerAge:{type:Number,required:true},
  gender:{type:String,required:true},
  seats:{type:Number,required:true}

  })
  module.exports = mongoose.model("Passenger",PassengerSchema)