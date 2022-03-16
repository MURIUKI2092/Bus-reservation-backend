const express =require ('express');
const connectDB = require('./models/db');
const app= express();
const port =5000
connectDB('mongodb://localhost/local');

app.listen(port,()=>{
  console.log(`server is connected to port ${port}`)
})
app.use("/api/v1/auth", require("./routes/auth"))
