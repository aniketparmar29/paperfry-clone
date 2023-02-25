const jwt = require('jsonwebtoken')
const authproduct = async(req,res,next)=>{
if(req.method!=="GET"){
    let authToken = (req.headers.authorization).split(" ")[1]
   let verify = await jwt.verify(authToken,process.env.SECURE_KEY)
    if(verify){
        next()
    }else{
        res.status(404).send({msg:"authencation required"})
    }
}else{
 next()
}
}
module.exports=authproduct;