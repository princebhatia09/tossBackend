import {
  ALL_PROMOTER_DATA_FAILURE,
  ALL_PROMOTER_DATA_LOADING,
  ALL_PROMOTER_DATA_SUCCESS,
} from "../../constants";

export const PromoterSuccess = (data)=>{
    return {
        type:ALL_PROMOTER_DATA_SUCCESS,
        payload:data
    }
}
export const PromoterFailuer = (data)=>{
    return {
        type:ALL_PROMOTER_DATA_FAILURE,
        payload:data
    }
}

export const PromoterLoading = ()=>{
    return{
        type:ALL_PROMOTER_DATA_LOADING
    }
}