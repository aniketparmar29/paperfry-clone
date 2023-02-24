import axios from "axios";
import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionType";

const getProduct = () => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  return axios
    .get("http://localhost:8080/product")
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_PRODUCT_ERROR }));
};

const addProduct = (payload) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });
  return axios
    .post(`http://localhost:8080/product`, payload)
    .then((res) => dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: ADD_PRODUCT_ERROR }));
};

export { getProduct, addProduct };
