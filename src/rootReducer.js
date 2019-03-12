import { combineReducers } from "redux";
import issueList from "./Pages/IssueList/reducer";
import issueDetail from "./Pages/IssueDetail/reducer";

export default combineReducers({
  issueList,
  issueDetail
});
