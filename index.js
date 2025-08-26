import express from "express";
const app=express();
app.get('/',(req,res)=>{
    res.json({
        message:"it is working"
    })
})
app.listen(3000,()=>{
    console.log('listening');
})