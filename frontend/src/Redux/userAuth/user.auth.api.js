import axios from "axios"

export const registerUserApi = async(data)=>{
    try{    
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/register`,data)
        return res
    }catch(err){
        console.log(err)
    }
}
export const loginUserApi = async(data)=>{
    try{    
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`,data)
        return res.data
    }catch(err){
        console.log(err)
    }
}