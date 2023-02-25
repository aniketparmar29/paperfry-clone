import axios from "axios";
import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
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

const updateProduct = (id, payload) => (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });
  return axios
    .patch(`http://localhost:8080/product/${id}`, payload)
    .then((res) =>
      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: UPDATE_PRODUCT_ERROR }));
};

const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  return axios
    .delete(`http://localhost:8080/product/${id}`)
    .then((res) => dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id }))
    .catch((err) => dispatch({ type: DELETE_PRODUCT_ERROR }));
};

export { getProduct, addProduct, updateProduct, deleteProduct };
