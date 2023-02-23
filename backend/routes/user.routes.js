const express= require("express")
const userRoute = express.Router()
require("dotenv").config();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User  = require("../models/user.model")
userRoute.post("/register",async(req,res)=>{
    try{
        let {password} = req.body;
       const encPass= await bcrypt.hash(password,+process.env.SALT_ROUNDS)
       const body = {...req.body, password:encPass}
       let newUser = new User(body);
        newUser.save();
        res.send({msg:"registration successful",data:newUser})
    }catch(err){
        res.send({"msg":"something went wrong","error":err})
    }
})
userRoute.post("/login",async(req,res)=>{
    try{
        let {password}  = req.body;
        const userExist = await User.find({email: req.body.email});
        if(userExist.length>0){
            let userPass= userExist[0].password;
            const isMathched = await bcrypt.compare(password,userPass)
            if(isMathched){
                let token = jwt.sign({id:userExist[0]._id},process.env.SECURE_KEY)
                res.send({token:token})
            }else{
                res.send({data:isMathched})
            }
        }else{
            res.status(404).send({msg:"invalid Credentials"})
        }
    }catch(err){
        res.send({msg:"somehting went wrong"})
    }
})






userRoute.get("/",async(req,res)=>{
    try{
    const allUsers =await User.find({})
    res.send({data:allUsers})
    }catch(err){
    res.send({error:err})
    }
})



module.exports = userRoute