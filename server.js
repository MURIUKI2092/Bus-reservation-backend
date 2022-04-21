const express = require("express");
const app = express();
const mongoose =require("mongoose");
 const port = 5000
const dotenv = require("dotenv")
dotenv.config();
app.use(express.json());

const AuthRoute = require("./routes/Auth");
const UserRoute = require("./routes/users");
const PassengerRoute = require("./routes/passenger")
const BusRoute = require("./routes/buses")

mongoose
.connect (process.env.MONGO_URL)
 
  .then(()=>console.log("DB connection Successful"))
  .catch((err)=>{
    console.log(err)
  })
app.use("/api/v1/auth",AuthRoute);
app.use("/api/v1/user",UserRoute);
app.use("/api/v1/user",PassengerRoute);
app.use("/api/v1/user",BusRoute)


app.listen({port},()=>{
  console.log("The server is up and running")
})