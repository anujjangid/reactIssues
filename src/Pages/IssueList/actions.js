import { ISSUES_FETCHING, ISSUES_SUCCESS, ISSUES_ERROR } from '../constant';
import { github } from '../../Util/api';

export function fetchIssues(dispatch, status) {
  fetch(`${github.issueList}?state=${status ? 'open' : 'closed'}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(response => {
      dispatch({
        type: ISSUES_SUCCESS,
        payload: response,
      });
    })
    .catch(err =>
      dispatch({
        type: ISSUES_ERROR,
        payload: err,
      }),
    );
  return {
    type: ISSUES_FETCHING,
    payload: {},
  };
}
