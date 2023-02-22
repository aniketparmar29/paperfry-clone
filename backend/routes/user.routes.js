const express= require("express")
const userRoute = express.Router()

userRoute.get("/",async(req,res)=>{
    try{
        res.send({"msg":"hello, welcome to the user's page"})
    }catch(err){
        res.send({"msg":"something went wrong","error":err})
    }
})

module.exports = userRoute