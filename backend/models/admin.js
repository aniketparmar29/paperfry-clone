const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:Number,required:true},
    isAdmin:{type:Boolean}
})
const Admin = mongoose.model("admin",adminSchema);
module.exports = Admin