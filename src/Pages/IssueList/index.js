// @flow

import React, { Component } from 'react';
import {
  InnerWrapper,
  Header,
  ListStyle,
  Loading,
  Wrapper,
  SVG,
  Middle,
} from '../../Components/styleComponent';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIssues } from './actions';
import Tags from '../../Components/Tags';
import moment from 'moment';
import INFO from '../../icon/INFO';
import COMMENTS from '../../icon/COMMENTS';
import Loader from '../../Loader';

const stateProps = state => ({
  issues: state.issueList,
});

const dispatchProps = dispatch => ({
  fetchIssues: status => dispatch(fetchIssues(dispatch, status)),
});

type Props = {
  issues: Object,
  fetchIssues: boolean => {},
};

type State = {
  issuesList: boolean,
};

class IssueList extends Component<Props, State> {
  static defaultProps = {
    issues: {},
    fetchIssues: () => {},
  };

  state = {
    issuesList: true,
  };

  componentDidMount() {
    const { issuesList } = this.state;
    // call to get the issue list
    this.props.fetchIssues(issuesList);
  }

  toggleStatus = status => {
    const { issuesList } = this.state;
    const { fetchIssues } = this.props;
    if (status !== issuesList) {
      this.setState({
        issuesList: status,
      });
      fetchIssues(status);
    }
  };

  getOpen = (issue: Object) => {
    return (
      <div className="status">
        {`#${issue.number} opened ${issue.created_at &&
          moment(issue.created_at)
            .endOf('day')
            .fromNow()} by `}
        {issue.user && <a href={issue.user.html_url}>{issue.user.login}</a>}
      </div>
    );
  };

  getClose = (issue: Object) => {
    return (
      <div className="status">
        {`#${issue.number} by `}
        {issue.user && <a href={issue.user.html_url}>{issue.user.login}</a>}
        {` was closed ${issue.created_at &&
          moment(issue.created_at)
            .endOf('day')
            .fromNow()}`}
      </div>
    );
  };

  render() {
    const { issuesList } = this.state;

    const { data, isLoading, err } = this.props.issues;
    return (
      <Wrapper>
        <h1>
          <a target="_blank" href="https://github.com/facebookk">
            Facebook
          </a>
          {'/'}
          <a target="_blank" href="https://github.com/facebook/react">
            react
          </a>
        </h1>
        <InnerWrapper>
          <Header>
            <div className="status">
              <span
                className={issuesList ? 'active' : ''}
                onClick={() => this.toggleStatus(true)}>
                Open
              </span>
              <span
                className={!issuesList ? 'active' : ''}
                onClick={() => this.toggleStatus(false)}>
                Close
              </span>
            </div>
          </Header>
          {isLoading && <Loader />}
          {err && (
            <Loading>
              <img
                src="https://www.lifewire.com/thmb/OO7CD06NAdoIwv71DgUgBiTd4ps=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg"
                alt="Image result for 404 not found"
                width="100%"
                height="400"
              />
            </Loading>
          )}
          {data &&
            data.map(issue => {
              const {
                id,
                number,
                title,
                labels,
                comments,
                comments_url,
              } = issue;
              return (
                <ListStyle key={id}>
                  <SVG>
                    <INFO />
                  </SVG>
                  <Middle>
                    <Link className="title" to={`/${number}`}>
                      {title}
                    </Link>
                    <Tags data={labels} />

                    {issuesList ? this.getOpen(issue) : this.getClose(issue)}
                  </Middle>
                  <div className="right-content">
                    <a target="_blank" href={comments_url}>
                      {' '}
                      <SVG>
                        <COMMENTS />
                      </SVG>
                      {comments}
                    </a>
                  </div>
                </ListStyle>
              );
            })}
        </InnerWrapper>
      </Wrapper>
    );
  }
}

export default connect(
  stateProps,
  dispatchProps,
)(IssueList);
