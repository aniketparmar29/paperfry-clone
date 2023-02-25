import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"
import axios from "axios";

const getProductRequestAction=()=>{
    return{type:GET_PRODUCT_REQUEST}
}

const getProductSuccesAction=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}

const getProductFailureAction=()=>{
    return{type:GET_PRODUCT_FAILURE}
}

export const getProducts = (query) => {
    return (dispatch) => {
        dispatch(getProductRequestAction())

        axios.get(`https://long-plum-coyote-gown.cyclic.app/products?category=${query}`).then((res)=>{
            dispatch(getProductSuccesAction(res.data.data))
        }).catch((err)=>{
            dispatch(getProductFailureAction())
        })
    }
}
