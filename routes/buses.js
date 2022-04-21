const router = require("express").Router();
const Buses =require("../models/buses");

//Admin storing buses info to the database

router.post("/buses",async(req,res)=>{
  try{
    const Bus = new Buses({
      BusNo:req.body.BusNo,
      townStage:req.body.townStage,
      destinationStation:req.body.destinationStation,
      price:req.body.price,
      departureTime:req.body.departureTime,
      ArrivalTime:req.body.ArrivalTime,
      sleepTime:req.body.sleepTime,
      Seats:req.body.Seats
    })
    const ourBus = await Bus.save();
    res.status(200).json(ourBus)


  }catch(err){
    res.status(500).json(err);
  }
})

// update a bus details

router.put("/buses/:id",async(req,res)=>{
  if(req.body.busId===req.params.id){
    try{
      const updatedBus =  await Buses.findByIdAndUpdate(req.params.id,{
        $set:req.body
      
      },{new:true});
      res.status(200).json(updatedBus);
      return;


    }catch(err){
      res.status(200).json(err);
    }
  }


})

//get all buses
router.get("/buses",async(req,res)=>{
 
  try{
    Buses.find({}).then((bus)=>{
      res.status(200).json(bus);
    })

  }catch(err){
    res.status(500).json(err);
  }
})


module.exports = router;
