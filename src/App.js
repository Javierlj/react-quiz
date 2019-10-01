import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Game from "./Game";

function App(props) {
  return (
    <div className={"App"}>
      <Game questions={props.questions} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
