const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    category:{type:String,required:true},
    images:{type:Array},
    brand:{type:Number},
    name:{type:String},
    rating:{type:String},
    price:{type:String},
    new_price:{type:String},
    in_stock:{type:Boolean}
})
const Product = mongoose.model("user",productSchema);
module.exports = Product