const express = require("express");
const app = express();
const mongoose =require("mongoose");
 const port = 5000
const dotenv = require("dotenv")
dotenv.config();
app.use(express.json());

const AuthRoute = require("./routes/Auth")

mongoose
.connect (process.env.MONGO_URL)
 
  .then(()=>console.log("DB connection Successful"))
  .catch((err)=>{
    console.log(err)
  })
app.use("/api/v1/auth",AuthRoute)


app.listen({port},()=>{
  console.log("The server is up and running")
})