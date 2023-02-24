import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { reducer as AdminProduct } from "./Admin/AdminProduct/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  AuthReducer,
  ProductReducer,
  AdminProduct,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
