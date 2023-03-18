import {
  ALL_USER_DATA_FAILURE,
  ALL_USER_DATA_LOADING,
  ALL_USER_DATA_SUCCESS,
} from "../constants";

export const UserData = (initialState = {}, action) => {
  switch (action.type) {
    case ALL_USER_DATA_LOADING:
      return { loading: true };
    case ALL_USER_DATA_SUCCESS:
      return { loading: false, userData: action.payload };
    case ALL_USER_DATA_FAILURE:
      return { loading: true, error: action.payload };
    default:
      return initialState;
  }
};
