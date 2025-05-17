require('dotenv').config()
const express=require('express')

const app=express()
const port=process.env.port ||3001

app.get('/',(req,res)=>{
 res.send("Hello From Bari")
})

app.get("/twitter", (req, res) => {
  res.send("AngadBari2@gmail.com");
});

app.get("/youtube", (req, res) => {
  res.send("Unique Rigtone 985");
});
   
app.listen(port,()=>{
    console.log(`Server Runing at port ${port}...` )
})