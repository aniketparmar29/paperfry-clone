import { ADD_TO_CART, CART_ERROR, CART_LOADING, GET_CART, REMOVE_FROM_CART, UPDATE_TO_CART } from "./actionTypes"


const initialState = {
    loading : false,
    error : false,
    cart : []
}

const CartReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case CART_LOADING : {
            return{
                ...state,
                loading : true,
                error : false
            }
        }
        case CART_ERROR : {
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        case ADD_TO_CART :{
            return {
                ...state,
                loading:false,
               cart:[payload]
            }
        }
        case GET_CART : {
            return {
                ...state,
                loading:false,
                cart :payload
            }
        }
        case REMOVE_FROM_CART : 
        let deleted=state.cart.filter((e)=>{
            return e.id!==payload
          })
          return {
            ...state,
            cart:[deleted]
          };
         case UPDATE_TO_CART:
            let updated=state.cart.map((e)=>{
              return e.id==payload.id?{...e,...payload}:e
            });
            return {
              ...state,
              cart:updated
            };
        default:{
                return state
            }
    }
}


export default CartReducer