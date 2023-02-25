import axios from "axios";
import { base_url } from "../../../Admin/Components/url";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionType";

const userLogin = (payload) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  return axios
    .post(`${base_url}/admin/login`, payload)
    .then((res) => {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
    })
    .catch((err) => dispatch({ type: USER_LOGIN_ERROR }));
};

export { userLogin };
