import { Provider } from 'react-redux';
import { createStore } from 'redux';

import React, { Component } from 'react';
import GlobalState from './reducers';
import App from '../App';

export default class ReduxProvider extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      score: 0,
      finished: false,
      questions: [],
      currentQuestion: 0,
    };
    this.store = this.configureStore();
  }

  render() {
    return (
      <Provider store={this.store}>
        <div style={{ height: '100%' }}>
          <App store={this.store} />
        </div>
      </Provider>
    );
  }

  configureStore() {
    const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__();
    return createStore(GlobalState, this.initialState, reduxDevTools);
  }
}
