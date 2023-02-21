import {GET_USERS_FAILURE,GET_USERS_REQUEST,GET_USERS_SUCCESS} from "./actionTypes";

const initialState = {
    users: [],
    isLoading:false,
    isError:false,
}


const reducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case GET_USERS_REQUEST: {
            return { ...state,isLoading: true}
        }
        case GET_USERS_SUCCESS: {
            return {...state,users: payload,isLoading: false}
        }
        case GET_USERS_FAILURE: {
            return {...state,isError: true,isLoading: false}
        }
        default: return state;
    }

}

export { reducer }