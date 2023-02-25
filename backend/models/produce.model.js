const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    rating_count:{type:String},
    title:{type:String},
    brand:{type:String},
    images:{type:Array},
    price_offer:{type:String},
    mrp:{type:String},
    discount:{type:String},
    category:{type:String},
    in_stock:{type:Boolean}
    
})
const Product = mongoose.model("product",productSchema);
module.exports = Product
