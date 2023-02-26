import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "./actionTypes";


export const addCardItem = (data) =>async(dispatch){
    dispatch(_addCardItem);
}


export const _addCardItem = (data) =>{
    return {
        type:action.Types.ADD_CART_ITEM,
        data
}}












// products
// const Product = () =>{
//     const dispatch = useDispatch();
//     const {product:{product}} = useSelector((ob)=>obj);
//     useEffecct(()=>{
//         // get data from the API
//     })

//     addCardItem = (item)=>{
//         console.log()
//     }
// }