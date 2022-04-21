const express = require("express");
const app = express();
const mongoose =require("mongoose");
port = 5000

const dotenv = require("dotenv")

dotenv.config();

mongoose
.connect (process.env.MONGO_URL)
 
  .then(()=>console.log("DB connection Successful"))
  .catch((err)=>{
    console.log(err)
  })



app.listen({port},()=>{
  console.log("The server is up and running")
})