import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Question from "./components/Question/question";
import Buttons from "./components/Buttons/Buttons";
import NavBar from "./components/NavBar/NavBar";

import { questionAnswer } from "./redux/actions";
<<<<<<< Updated upstream
import { getQuestions } from "./services/apiCalls";
=======
import getQuestions from "./services/apiCalls";
>>>>>>> Stashed changes

import "./Game.sass";

const Game = props => {
  const { dispatch, questions, currentQuestion } = props;
  const onQuestionAnswer = answer => {
    dispatch(questionAnswer(currentQuestion, answer));
  };

  useEffect(() => {
    getQuestions(dispatch);
  }, []);

  useEffect(() => {
    document.getElementsByTagName("input").value = "ds";
  }, [questions]);

  return questions.length === 0 ? (
    <p>No hay preguntas</p>
  ) : (
    <div>
      <NavBar />
      <div className="game">
        <Question
          question={questions[currentQuestion]}
          onQuestionAnswer={answer => onQuestionAnswer(answer)}
        />
      </div>
      <Buttons />
    </div>
  );
};

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentQuestion: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  const { questions, currentQuestion } = state;
  return {
    questions,
    currentQuestion
  };
}

<<<<<<< Updated upstream
=======
Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentQuestion: PropTypes.number.isRequired
};

>>>>>>> Stashed changes
export default connect(mapStateToProps)(Game);
