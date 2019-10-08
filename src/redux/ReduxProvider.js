import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import React, { Component } from "react";
import GlobalState from "./reducers";
import App from "../App";

export default class ReduxProvider extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      score: 0,
      finished: false,
      questions: [],
      currentQuestion: 0,
      timeLeft: 120
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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  }
}
