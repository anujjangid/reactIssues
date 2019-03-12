import React from 'react';
import renderer from 'react-test-renderer';
import IssueDetail from './index';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from '../../store';
const store = configureStore();

describe('Issue Detail Page', () => {
  const issue = {
    data: {
      created_at: '',
      user: {},
    },
    comments: '',
  };
  it('renders correctly with data', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <IssueDetail issue={issue} />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
