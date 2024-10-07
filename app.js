const express=require("express");
const https=require("https");

const app=express();

app.get("/getting/data",(req,res)=>{
    const url ="https://api.openweathermap.org/data/2.5/weather?lat=34.02266&lon=71.48315&appid=11b31a5e1d567f03939feab1c31405c4"
    https.get(url,(response)=>{
        let data =""

        response.on("data",(chunk)=>{
            data += chunk
        })
        response.on("end",()=>{
            const weatherData= JSON.parse(data);
            res.send(weatherData)
        })
    })
})
 
 app.listen(3000,()=>{
    console.log("server running");
    
 })


