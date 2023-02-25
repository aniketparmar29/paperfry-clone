const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    password:{type:String,required:true},
    city:{type:String},
    address:{type:String},
    cart:{type:Array},
    wishlist:{type:Array},
    orders:{type:Array}
})
const User = mongoose.model("user",userSchema);
module.exports = User