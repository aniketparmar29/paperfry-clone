const express = require("express")
const { connect } = require("mongoose")
const productRoutes = require("./routes/products.routes")
const userRoute = require("./routes/user.routes")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())
app.use("products",productRoutes)

app.use("user",userRoute)






let PORT = process.env.PORT || 5000
app.listen(PORT,async()=>{
    try{
        await connect(process.env.MONGO_URL)
        console.log("connected to the backend")
    }catch(err){
        console.log("cannot connected to the backend")
    }
    console.log("server is running at port",PORT)
})