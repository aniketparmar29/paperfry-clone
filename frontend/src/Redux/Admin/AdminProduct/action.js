import axios from "axios";
import { base_url } from "../../../Admin/Components/url";

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
    .get(`${base_url}/products`)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data.data });
    })
    .catch((err) => dispatch({ type: GET_PRODUCT_ERROR }));
};

const addProduct = (payload) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });
  return axios
    .post(`${base_url}/products`, payload, {
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) =>
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data.data })
    )
    .catch((err) => dispatch({ type: ADD_PRODUCT_ERROR }));
};

const updateProduct = (_id, payload) => (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });
  return axios
    .patch(`${base_url}/products/${_id}`, payload, {
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) =>
      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: res.data.data })
    )
    .catch((err) => dispatch({ type: UPDATE_PRODUCT_ERROR }));
};

const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  return axios
    .delete(`${base_url}/products/${id}`, {
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id }))
    .catch((err) => dispatch({ type: DELETE_PRODUCT_ERROR }));
};

export { getProduct, addProduct, updateProduct, deleteProduct };
