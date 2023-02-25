import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_REQUEST,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
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
    case UPDATE_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case UPDATE_PRODUCT_SUCCESS:
      let updatedProduct = state.product.map((item) =>
        item.id === payload.id ? payload : item
      );
      return { ...state, isLoading: false, product: updatedProduct };
    case UPDATE_PRODUCT_ERROR:
      return { ...state, isLoading: false, isError: true };
    case DELETE_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_PRODUCT_ERROR:
      const filteredProduct = state.product.filter(
        (item) => item.id !== payload
      );
      return { ...state, isLoading: false, product: filteredProduct };
    default:
      return state;
  }
};

export { reducer };
