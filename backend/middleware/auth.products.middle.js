const jwt = require('jsonwebtoken')
const authproduct = async(req,res,next)=>{
if(req.method!=="GET"){
    let authToken = (req.headers.authorization).split(" ")[1]
   let verify = await jwt.verify(authToken,process.env.SECURE_KEY)
    console.log(verify)
//  res.send("hello wait")
next()

}else{
 next()
}
}
module.exports=authproduct;