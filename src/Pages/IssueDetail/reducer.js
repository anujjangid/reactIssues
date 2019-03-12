import {
  ISSUE_FETCHING,
  ISSUE_SUCCESS,
  ISSUE_ERROR,
  ISSUE_COMMENTS_FETCHING,
  ISSUE_COMMENTS_SUCCESS,
  ISSUE_COMMENTS_ERROR
} from "../constant";

const InitialState = {
  issues: {
    isLoading: false,
    data: [],
    comments: [],
    err: {}
  }
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case ISSUE_FETCHING:
      return {
        ...state,
        isLoading: true,
        data: []
      };
    case ISSUE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case ISSUE_ERROR:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    case ISSUE_COMMENTS_FETCHING:
      return {
        ...state,
        isLoading: true,
        comments: []
      };
    case ISSUE_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload
      };
    case ISSUE_COMMENTS_ERROR:
      return {
        ...state,
        err: action.payload,
        comments: []
      };
    default:
      return {
        ...state
      };
  }
};
