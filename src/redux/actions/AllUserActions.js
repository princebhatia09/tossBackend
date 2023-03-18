import { ALL_USER_DATA_FAILURE, ALL_USER_DATA_SUCCESS } from "../../constants";

export const UserData = (data)=>{
    return {
        type:ALL_USER_DATA_SUCCESS,
        payload:data
    }
}

export const UserDataFail = (data)=>{
    return {
        type:ALL_USER_DATA_FAILURE,
        payload:data
    }
}