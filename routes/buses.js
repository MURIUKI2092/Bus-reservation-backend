const router = require("express").Router();

const Buses =require("../models/buses");

//Admin storing buses info to the database

router.post("/",async(req,res)=>{
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

router.put("/:id",async(req,res)=>{
  
    try{
      const updatedBus =  await Buses.findByIdAndUpdate(req.params.id,{
        $set:req.body
      
      },{new:true});
      res.status(200).json(updatedBus);
      return;


    }catch(err){
      res.status(200).json(err);
    }
 


})

//get all buses
router.get("/",async(req,res)=>{
  try {
    const allBuses = await Buses.find();
    res.status(200).json(allBuses)

  }catch(err){
    res.status(500).json(err)
  }
})

//get a single bus
router.get("/:id",async(req,res)=>{
  try{
    const bus = await Buses.findById(req.params.id)
    res.status(200).json(bus)
   

  }catch(err){
    res.status(200).json(err)
  }
})

// delete a bus
router.delete("/:id",async(req,res)=>{
  try{
    const busToDelete = await Buses.findByIdAndDelete(req.params.id);
    res.status(200).json("bus has been deleted")

  }catch(err){
    res.status(200).json(err);

  }
})


module.exports = router;
