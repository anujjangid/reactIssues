// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleIssue, fetchIssueComments } from './actions';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { IssueListDetail, Comment } from '../../Components/styleComponent';

const stateProps = state => ({
  issue: state.issueDetail,
});

type Props = {
  issue: Object,
  issueId: String,
  fetchSingleIssue: String => {},
  fetchIssueComments: String => {},
};

const dispatchProps = (dispatch: Function) => ({
  fetchSingleIssue: (issueId: string) =>
    dispatch(fetchSingleIssue(dispatch, issueId)),
  fetchIssueComments: (issueId: string) =>
    dispatch(fetchIssueComments(dispatch, issueId)),
});

class IssueDetail extends Component<Props> {
  static defaultProps = {
    issue: {},
    issueId: '',
    fetchSingleIssue: () => {},
    fetchIssueComments: () => {},
  };

  componentDidMount() {
    const { issueId, fetchSingleIssue, fetchIssueComments } = this.props;
    if (issueId) {
      fetchSingleIssue(issueId);
      fetchIssueComments(issueId);
    }
  }

  render() {
    const { data, comments } = this.props.issue;
    return (
      <div className="page">
        <Link to="./">{'Back'}</Link>
        {data && (
          <IssueListDetail>
            <h1>
              <span className="title">{data.title}</span>
              <span className="number">{data.number && `#${data.number}`}</span>
            </h1>
            <div className="headerBase">
              {data.user && <a href={data.user.html_url}>{data.user.login}</a>}
              {` opened this issue ${data.created_at &&
                moment(data.created_at)
                  .endOf('day')
                  .fromNow()} ${
                data.comments ? ` - ${data.comments} comments` : ''
              }`}
            </div>

            <div className="comments">
              {comments &&
                comments.map(comment => (
                  <Comment key={comment.id}>
                    <div className="header">{comment.user.login}</div>
                    <div className="body">{comment.body}</div>
                  </Comment>
                ))}
            </div>
          </IssueListDetail>
        )}
      </div>
    );
  }
}

export default connect(
  stateProps,
  dispatchProps,
)(IssueDetail);
