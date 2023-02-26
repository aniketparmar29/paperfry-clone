import axios from "axios"
import { ADD_TO_CART, CART_ERROR, CART_LOADING, GET_CART } from "./actionTypes"

// const https://long-plum-coyote-gown.cyclic.app/= "https://long-plum-coyote-gown.cyclic.app/"
export const  reqInstance = axios.create({
  headers: {
    Authorization : `Bearer ${localStorage.getItem("token")}`
    }
})
export const updateCart = (item)=>async(dispatch)=>{
  dispatch({type:CART_LOADING})
  console.log(item)
   try{
  const res = await reqInstance.patch( `${process.env.REACT_APP_BASE_URL}/user/cart`,item)
    dispatch({type:ADD_TO_CART,payload:res.data.data.cart})
   }catch(error){
     dispatch({type:CART_ERROR})
   }
}
export const getCartItems = ()=>async(dispatch)=>{
    dispatch({type:CART_LOADING})
    try{
        const res = await reqInstance.get( `${process.env.REACT_APP_BASE_URL}/user/cart`)
        console.log(res.data.data)
        dispatch({type:GET_CART,payload:res.data.data})
    }catch(error){
        dispatch({type:CART_ERROR})
    }
}