import {
  ISSUE_FETCHING,
  ISSUE_SUCCESS,
  ISSUE_ERROR,
  ISSUE_COMMENTS_FETCHING,
  ISSUE_COMMENTS_SUCCESS,
  ISSUE_COMMENTS_ERROR,
} from '../constant';
import { github } from '../../Util/api';

export function fetchSingleIssue(dispatch, issueId) {
  fetch(`${github.issueList}/${issueId}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(response =>
      dispatch({
        type: ISSUE_SUCCESS,
        payload: response,
      }),
    )
    .catch(err =>
      dispatch({
        type: ISSUE_ERROR,
        payload: err,
      }),
    );
  return {
    type: ISSUE_FETCHING,
    payload: {},
  };
}

export function fetchIssueComments(dispatch, issueId) {
  fetch(`${github.issueList}/${issueId}/comments`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(response =>
      dispatch({
        type: ISSUE_COMMENTS_SUCCESS,
        payload: response,
      }),
    )
    .catch(err =>
      dispatch({
        type: ISSUE_COMMENTS_ERROR,
        payload: err,
      }),
    );
  return {
    type: ISSUE_COMMENTS_FETCHING,
    payload: {},
  };
}
