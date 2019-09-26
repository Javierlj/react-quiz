import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Game from "./Game";
import { questionAnswer } from "./redux/actions";

function App(props) {
  return (
    <div className={"App"}>
      <Game
        question={props.questions[props.currentQuestion]}
        onQuestionAnswer={answer => {
          this.props.dispatch(
            questionAnswer(this.props.currentQuestion, answer)
          );
        }}
      />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
