const express = require("express")

const productRoutes = express.Router()

productRoutes.get("/",async(req,res)=>{
    res.send({"msg":"heyyy, welcoem to the product page"})
})



module.exports = productRoutes