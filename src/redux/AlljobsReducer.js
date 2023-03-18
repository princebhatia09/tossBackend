import {
  ADD_ALL_JOBS_DATA,
  ALL_JOBS_FAILURE,
  ALL_JOBS_LOADING,
} from "../constants";

export const Alljobs = (state = {},action) => {
  switch (action.type) {
    case ADD_ALL_JOBS_DATA:
      return { ...state, Jobs: action.payload };

    case ALL_JOBS_LOADING:
      return { ...state };

    case ALL_JOBS_FAILURE:
      return { ...state };

    default:
      return state;
  }
};
