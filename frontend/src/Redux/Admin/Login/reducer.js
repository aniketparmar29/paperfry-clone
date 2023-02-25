import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionType";

const initialState = {
  admin: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, isLoading: false, admin: [...state.admin, payload] };
    case USER_LOGIN_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
