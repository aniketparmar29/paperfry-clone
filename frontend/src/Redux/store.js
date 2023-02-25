import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { reducer as AdminProduct } from "./Admin/AdminProduct/reducer";
import { reducer as AdminLogin } from "./Admin/Login/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  AuthReducer,
  ProductReducer,
  AdminProduct,
  AdminLogin,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
