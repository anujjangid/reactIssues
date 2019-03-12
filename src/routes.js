import React from 'react';
import { Route, Switch } from 'react-router-dom';

import IssueList from './Pages/IssueList';
import IssueDetail from './Pages/IssueDetail';
import ErrorPage from './Pages/ErrorPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={IssueList} />
    <Route
      path="/:issueId"
      exact
      render={({ match }) => <IssueDetail issueId={match.params.issueId} />}
    />
    <Route path="*" component={ErrorPage} />
  </Switch>
);

export default Routes;
