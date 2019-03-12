import { ISSUES_FETCHING, ISSUES_SUCCESS, ISSUES_ERROR } from "../constant";

const InitialState = {
  issues: {
    isLoading: false,
    data: [],
    err: {}
  }
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case ISSUES_FETCHING:
      return {
        ...state,
        isLoading: true,
        data: []
      };
    case ISSUES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case ISSUES_ERROR:
      return {
        ...state,
        isLoading: false,
        err: action.payload,
        data: []
      };
    default:
      return {
        ...state
      };
  }
};
