/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Question from "./components/Question/Question";
import Buttons from "./components/Buttons/Buttons";
import CustomModal from "./components/CustomModal/CustomModal";

import { questionAnswer, reset } from "./redux/actions";
import { getQuestions } from "./services/apiCalls";

import "./Game.sass";
import CountDown from "./components/CountDown/CountDown";

const Game = props => {
  const { dispatch, questions, currentQuestion, history } = props;
  const onQuestionAnswer = answer => {
    dispatch(questionAnswer(currentQuestion, answer));
  };

  const [modalShow, setModalShow] = useState(true);

  useEffect(() => {
    getQuestions(dispatch);
  }, []);

  return questions.length === 0 ? (
    <p>No hay preguntas</p>
  ) : (
    <div>
      <div className="game">
        <CountDown />
        <CustomModal
          title="Time's up!"
          show={modalShow}
          history={history}
          onHide={() => setModalShow(false)}
          openResults={() => window.open("/results")}
          reset={() => dispatch(reset())}
        >
          <p>Correct answers: </p>
          <p>Wrong answers: </p>
          <p>To see the results click on the button! </p>
        </CustomModal>
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
  score: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Game);
