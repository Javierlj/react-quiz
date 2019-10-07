import { Provider } from "react-redux";
import { createStore } from "redux";

import React, { Component } from "react";
import GlobalState from "./reducers";
import App from "../App";

import createHistory from "history/createBrowserHistory";
import Results from "../components/Results/Results";
import { Router, Route, Switch } from "react-router";

const history = createHistory();

export default class ReduxProvider extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      score: 0,
      finished: false,
      questions: [],
      currentQuestion: 0
    };
    this.store = this.configureStore();
  }

  configureStore() {
    const reduxDevTools =
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__();
    return createStore(GlobalState, this.initialState, reduxDevTools);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Router history={history}>
          <Switch>
            <Route path="/results" component={Results} />
            <Route path="/" component={App} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
