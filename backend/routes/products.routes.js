const express = require("express")
const Product = require("../models/produce.model")
const productRoutes = express.Router()

productRoutes.get("/",async(req,res)=>{
    try{
        const {page} = req.query;
      const skip = (page-1)*20;
        let allProducts = await Product.find().sort({_id: -1}).skip(skip).limit(20)
        res.send({msg:'success',data:allProducts})
    }catch(er){
        res.sned({msg:"something went wrong"})
    }
})
productRoutes.post("/",async(req,res)=>{
    try{
        const newItem = new Product(req.body);
        await newItem.save();
        res.send({msg:"item added successfully"})
    }catch(err){
        res.send({msg:"somethign went wrong",err:err})
    }
    res.send({"msg":"heyyy, welcoem to the product page"})
})

productRoutes.patch("/:_id",async(req,res)=>{
   try{
    await Product.findByIdAndUpdate(req.params,req.body);
    res.send({msg:"Product updated successfully"})
   }catch(err){
    res.send({msg:"error while updating the product Try again"})
   }
})
// productRoutes.delete("/:_id",async(req,res)=>{
//     try{
//         await Product.findByIdAndDelete(req.params._id)
//         res.send({msg:"the product has been deleted successfully"})
//     }catch(err){
//         res.send({msg:"error while deleting the product, try again"})
//     }
// })
module.exports = productRoutes