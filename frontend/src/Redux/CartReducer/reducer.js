// notes --> have to include the reducer to combined reducer



import * as actionTypes from "./actionTypes";

const initialState = {
    items:[],
    itemsPriceTotal:0,
    totalItems:0,
    totalQuantity:0
}


export const cart = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_CART_ITEM:
            let tempData = action.data;
            tempData.quantity = 1;
            tempData.itemTotal = tempData.price.*tempData.quantity;

            return {
                ...state,
                item:[...state.item,tempData],
                itemsPriceTotal:state.item.reduce((a,b)=>a+(b.itemTotal||0,0)),
                totoalItems:state.items.length,
                totalQuantity:state.item.reduce((a,b)=>a+(b.quantity)||0,0)
            }
        default:
            return state;
    }
}

