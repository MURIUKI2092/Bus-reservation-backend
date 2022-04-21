const mongoose = require("mongoose")

const PassengerSchema  = new mongoose.Schema({
  passengerName:{type:String,
  required:true,},
  passengerAge:{type:String,required:true},
  gender:{type:String,required:true},
  seats:{type:String,required:true}

  })
  module.exports = mongoose.model("Passenger",PassengerSchema)