import {GET_PRODUCT_FAILURE,GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS} from "./actionTypes";

const initialState = {
    clothing: [],
    isLoading:false,
    isError:false,
}


const reducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case GET_PRODUCT_REQUEST: {
            return { ...state,isLoading: true}
        }
        case GET_PRODUCT_SUCCESS: {
            return {...state,clothing: payload,isLoading: false}
        }
        case GET_PRODUCT_FAILURE: {
            return {...state,isError: true,isLoading: false}
        }
        default: return state;
    }

}

export { reducer }