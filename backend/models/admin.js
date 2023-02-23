const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:Number,required:true},
})
const Product = mongoose.model("admin",productSchema);
module.exports = Product