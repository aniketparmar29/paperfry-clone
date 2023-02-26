import{REGISTER_USER_LOADING,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
    LOGIN_USER_LOADING,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_SUCCESS,} from './user.action.types'
import { loginUserApi, registerUserApi } from './user.auth.api';

export const userLogin = (data)=>async(dispatch)=>{
    try{
        dispatch({type:LOGIN_USER_LOADING});
        let res = await loginUserApi(data)
        dispatch({type:LOGIN_USER_SUCCESS,payload:{token:res.token,data:res.data}})
    }catch(err){
        dispatch({type:LOGIN_USER_ERROR})
    }
}

export const usersignup = (data)=>async(dispatch)=>{
    try{
        dispatch({type:REGISTER_USER_LOADING})
        let res = await registerUserApi(data)
        dispatch({type:REGISTER_USER_SUCCESS,payload:res})
    }catch(err){
        dispatch({type:REGISTER_USER_ERROR})
    }
}

export const logoutUser = ()=> async(dispatch)=>{
    dispatch({type:LOGOUT_USER_SUCCESS})
}