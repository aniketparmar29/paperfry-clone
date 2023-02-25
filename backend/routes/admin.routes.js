const express = require("express")
const adminRoute = express.Router()
const Admin = require("../models/admin")
adminRoute.post("/login",async(req,res)=>{
        try{
            let {password}  = req.body;
            const userExist = await Admin.find({email: req.body.email});
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
            console.log(err)
            res.send({msg:"somehting went wrong"})
        }
})
// adminRoute.post("/register",async(req,res)=>{
//     try{
//         let {password} = req.body;
//        const encPass= await bcrypt.hash(password,+process.env.SALT_ROUNDS)
//        const body = {...req.body, password:encPass}
//        let newUser = new Admin(body);
//         newUser.save();
//         res.send({msg:"registration successful",data:newUser})
//     }catch(err){
//         console.log(err)
//         res.send({"msg":"something went wrong","error":err})
//     }
// })



module.exports = adminRoute;
