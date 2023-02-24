import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionType";

const initialState = {
  product: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, product: payload };
    case GET_PRODUCT_ERROR:
      return { ...state, isLoading: false, isError: true };
    case ADD_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: [...state.product, payload],
      };
    case ADD_PRODUCT_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
