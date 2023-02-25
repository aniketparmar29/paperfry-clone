const express= require("express")
const userRoute = express.Router()
require("dotenv").config();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User  = require("../models/user.model")
const Product = require("../models/produce.model")


//=================registering  new user ===============

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


//================login user==================

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


// ================get user's cart, orders and wishlist ============

userRoute.get("/cart",async(req,res)=>{
    try{
        let user = await User.find(req.body)
        let userCart = user[0].cart;
        let cartData =await Product.find({_id:{$in:userCart}})
        res.send({data:cartData})
    }catch(err){
        res.status(404).send({msg:"something went wrong"})
    }
})
userRoute.get("/orders",async(req,res)=>{
    try{
        let user = await User.find(req.body)
        let userOrders = user[0].orders;
        let ordersData =await Product.find({_id:{$in:userOrders}})
        res.send({data:ordersData})
    }catch(err){
        res.status(404).send({msg:"something went wrong"})
    }
})
userRoute.get("/wishlist",async(req,res)=>{
    try{
        let user = await User.find(req.body)
        let userwishlist = user[0].wishlist;
        let wishData =await Product.find({_id:{$in:userwishlist}})
        res.send({data:wishData})
    }catch(err){
        res.status(404).send({msg:"something went wrong"})
    }
})

// ==========update uesr's cart orders or wishlist=========

userRoute.patch("/cart",async(req,res)=>{
    try{
       let data = await User.findByIdAndUpdate({_id:req.body._id},{cart:req.body.cart});
        res.send({msg:"updated Successfully",data:data})
    }catch(err){
        console.log(err)
        res.status(404).send({msg:'something went wrong'})
    }
})
userRoute.patch("/orders",async(req,res)=>{
    try{
       let data = await User.findByIdAndUpdate({_id:req.body._id},{orders:req.body.orders});
        res.send({msg:"updated Successfully",data:data})
    }catch(err){
        console.log(err)
        res.status(404).send({msg:'something went wrong'})
    }
})
userRoute.patch("/wishlist",async(req,res)=>{
    try{
       await User.findByIdAndUpdate({_id:req.body._id},{wishlist:req.body.wishlist});
        res.send({msg:"updated Successfully"})
    }catch(err){
        console.log(err)
        res.status(404).send({msg:'something went wrong'})
    }
})


// ================= Data for Admin =============

// get All users============

userRoute.get("/",async(req,res)=>{
    try{
    const allUsers =await User.find({})
    res.send({data:allUsers})
    }catch(err){
    res.send({error:err})
    }
})

// =============== To get uesr's cart items ============

userRoute.get("/cart/:_id",async(req,res)=>{
    try{
        let user = await User.find(req.params)
        let userCart = user[0].cart;
        let cartData =await Product.find({_id:{$in:userCart}})
        res.send({data:cartData})
    }catch(err){
        res.status(404).send({msg:"something went wrong"})
    }
})

userRoute.get("/orders/:_id",async(req,res)=>{
    try{
        let user = await User.find(req.params)
        let userOrders = user[0].orders;
        let ordersData =await Product.find({_id:{$in:userOrders}})
        res.send({data:ordersData})
    }catch(err){
        res.status(404).send({msg:"something went wrong"})
    }
})
userRoute.get("/wishlist/:_id",async(req,res)=>{
    try{
        let user = await User.find(req.params)
        let userwishlist = user[0].wishlist;
        let wishData =await Product.find({_id:{$in:userwishlist}})
        res.send({data:wishData})
    }catch(err){
        res.status(404).send({msg:"something went wrong"})
    }
})

module.exports = userRoute