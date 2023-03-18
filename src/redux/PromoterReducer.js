import {
    ALL_PROMOTER_DATA_LOADING,
    ALL_PROMOTER_DATA_SUCCESS,
    ALL_PROMOTER_DATA_FAILURE,
  } from "../constants";
  
  export const PromoterReducer = (initialState = {}, action) => {
    switch (action.type) {
      case ALL_PROMOTER_DATA_LOADING:
        return { loading: true };
      case ALL_PROMOTER_DATA_SUCCESS:
        return { loading: false, userData: action.payload,error:false };
      case ALL_PROMOTER_DATA_FAILURE:
        return { loading: true, userData: action.payload,error:true };
      default:
        return initialState;
    }
  };
  