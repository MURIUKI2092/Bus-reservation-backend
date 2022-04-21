const router = require("express").Router();
const Passenger = require("../models/passenger");


//  obtain a passenger and store to the Database
router.post("/passenger",async(req,res)=>{
  try{
    const newPassenger = new Passenger({
      passengerName:req.body.passengerName,
      passengerAge:req.body.passengerAge,
      gender:req.body.gender,
      seats:req.body.seats
    })
    const ourPassenger = await newPassenger.save();
    res.status(200).json(ourPassenger)
    return


  }catch(err){
    res.status(500).json(err);
  }

})

module.exports = router;