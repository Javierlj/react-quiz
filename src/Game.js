/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Spinner } from "react-bootstrap";

import Question from "./components/Question/Question";
import Buttons from "./components/Buttons/Buttons";

import { questionAnswer } from "./redux/actions";
import { getQuestions } from "./services/apiCalls";

import "./Game.sass";

const Game = props => {
  const {dispatch,
    questions,
    currentQuestion,
    history,
    finished,
    loading} = props;

  const onQuestionAnswer = answer => {
    dispatch(questionAnswer(currentQuestion, answer));
  };

  useEffect(() => {
    getQuestions(dispatch);
  }, []);

  useEffect(() => {
    if (finished) {
      history.push("/results");
    }
  }, [finished]);

  return loading ? (
    <div className="spinner">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  ) : questions.length === 0 ? (
    <p>No hay preguntas</p>
  ) : (
    <div>
      <div className="game">
        <Question
          question={questions[currentQuestion]}
          onQuestionAnswer={answer => onQuestionAnswer(answer)}
        />
        <Buttons history={history} />
      </div>
    </div>
  );
};

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentQuestion: PropTypes.number.isRequired,
  finished: PropTypes.bool.isRequired,
  history: PropTypes.any.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Game);
