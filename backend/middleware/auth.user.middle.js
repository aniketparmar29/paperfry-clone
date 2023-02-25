const jwt = require("jsonwebtoken")
const userAuth = (req,res,next)=>{
const {method} = req;
if(method=="GET"){
    let token = (req.headers.authorization).split(' ')[1];
    let userid = jwt.decode(token,process.env.SECURE_KEY)
    req.body={_id:userid.id};
    next()
}else if(method=='PATCH'){
    let token = (req.headers.authorization).split(' ')[1];
    let userid = jwt.decode(token,process.env.SECURE_KEY)
    req.body={...req.body, _id:userid.id};
    next()
}else{
    next()    
}
}

module.exports = userAuth;