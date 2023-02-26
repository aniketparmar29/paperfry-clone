import axios from "axios"
import { ADD_TO_CART, CART_ERROR, CART_LOADING, GET_CART, REMOVE_FROM_CART, UPDATE_TO_CART } from "./cart.types"

const API= "api"

export const addCart = (item)=>async(dispatch)=>{
   dispatch({type:CART_LOADING})
   try{
    let res = await axios.post("api",item);
    //console.log(res.data)
    dispatch({type:ADD_TO_CART,payload:res.data})
   }catch(error){
     dispatch({type:CART_ERROR})
   }
}

export const getCartItems = ()=>async(dispatch)=>{
    dispatch({type:CART_LOADING})
    try{
        let res = await axios.get("api")
        //console.log(res.data)
        dispatch({type:GET_CART,payload:res.data})
    }catch(error){
        dispatch({type:CART_ERROR})
    }
}

export const deleteCart = (id)=>async(dispatch)=>{
    dispatch({type:CART_LOADING})
    try{
        let res = await axios.delete(`api`)
        dispatch({type:REMOVE_FROM_CART,payload:id})
    }catch(error){
        dispatch({type:CART_ERROR})
    }
}


export const updateCart = (id,changes)=>async(dispatch)=>{
    dispatch({type:CART_LOADING})
    try{
        let res = await axios.patch(`${api}${id}`,{
            ...changes
        });
        dispatch({type:UPDATE_TO_CART,payload:res.data})
    }catch(error){
        dispatch({type:CART_ERROR})
    }
}