import { USER_LOADING, USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from "../constants";

export const login = (action,initialState={})=>{

    switch(action.type){
        case USER_LOADING:
            return {loading:true}
        case USER_LOGIN_SUCCESS:
            return {loading:false,userInfo:action.payload}        
        case USER_LOGIN_FAILURE:
            return {loading:true,error:action.payload}
        default:
            return initialState
    }

}