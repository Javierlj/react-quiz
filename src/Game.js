import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Countdown from "react-countdown-now";

import Question from "./components/Question/Question";
import Buttons from "./components/Buttons/Buttons";
import CustomModal from "./components/CustomModal/CustomModal";

import { questionAnswer } from "./redux/actions";
import { getQuestions } from "./services/apiCalls";

import "./Game.sass";

const Game = props => {
  const { dispatch, questions, currentQuestion, history } = props;
  const onQuestionAnswer = answer => {
    dispatch(questionAnswer(currentQuestion, answer));
  };

  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    getQuestions(dispatch);
  }, []);

  // eslint-disable-next-line react/prop-types
  const renderer = ({ seconds, completed }) => {
    if (completed) {
      setModalShow(true);
    }
    // Render a countdown
    return <span>{seconds}</span>;
  };

  return questions.length === 0 ? (
    <p>No hay preguntas</p>
  ) : (
    <div>
      <div className="game">
        <Countdown date={Date.now() + 50000} renderer={renderer} />
        <CustomModal
          title="Time's up!"
          show={modalShow}
          history={history}
          onHide={() => setModalShow(false)}
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
  currentQuestion: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  const { questions, currentQuestion } = state;
  return {
    questions,
    currentQuestion
  };
}

export default connect(mapStateToProps)(Game);
