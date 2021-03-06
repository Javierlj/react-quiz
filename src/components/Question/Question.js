/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import CustomButton from "../Buttons/Button";
import "./question.sass";
import { nextQuestion, previousQuestion } from "../../redux/actions";
import CustomList from "../CustomList/CustomList";
import Indicators from "../Indicators/Indicators";
import CountDown from "../CountDown/CountDown";

const Question = props => {
  const {question,
    onQuestionAnswer,
    dispatch,
    currentQuestion,
    questions,
    finished} = props;

  const buttonStyle = {
    "background-color": "transparent",
    color: "black",
    height: "100%",
    padding: 0,
    border: "none",
    background: "none"
  };
  const previousButton = {
    name: "<",
    buttonFunction: () => dispatch(previousQuestion()),
    style: buttonStyle
  };
  const nextButton = {
    name: ">",
    buttonFunction: () => dispatch(nextQuestion()),
    style: buttonStyle
  };

  return (
    <div className="question">
      <div className="question_main">
        <CustomButton
          button={previousButton}
          disabled={currentQuestion === 0}
        />
        <div className="question_main_image_wrapper">
          <img
            className="question_main_image_zoom"
            src={
              question.attachment && question.attachment.url
                ? question.attachment.url
                : "https://www.bernardsqualitycars.com/dist/img/nophoto.jpg"
            }
            alt=""
          />
        </div>
        <div className="question_main_data">
          <CountDown />
          <p className="question_main_number">Question {currentQuestion + 1}</p>
          <p className="question_main_text">{question.question}</p>
          <input
            className="question_main_input"
            type="text"
            value={question.userAnswer || ""}
            onChange={e => onQuestionAnswer(e.target.value)}
            disabled={finished}
          />
          <CustomList title="Tips" listItems={question.tips} />
        </div>
        <CustomButton
          button={nextButton}
          disabled={currentQuestion === questions.length - 1}
        />
      </div>
      <div className="question_bottom">
        <div className="question_author">
          <img
            className="question_author_photo"
            src={question.author.photo.url}
            alt=""
          />
          <p className="question_author_name">{question.author.username}</p>
        </div>
        <Indicators className="game_indicators" length={questions.length} />
        <div style={{ width: "70px" }} />
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    attachment: PropTypes.shape({
      url: PropTypes.string
    }),
    tips: PropTypes.arrayOf(PropTypes.string),
    userAnswer: PropTypes.string,
    author: PropTypes.shape({
      photo: PropTypes.shape({
        url: PropTypes.string
      }),
      username: PropTypes.string
    })
  }),
  onQuestionAnswer: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  finished: PropTypes.bool.isRequired
};

Question.defaultProps = {
  question: {
    attachment: {
      url: "https://www.bernardsqualitycars.com/dist/img/nophoto.jpg"
    },
    tips: [],
    userAnswer: "",
    author: {
      photo: {
        url: "http://k08.kn3.net/19B804182.jpg"
      },
      username: "Sin autor"
    }
  }
};

function mapStateToProps(state) {
  const { questions, currentQuestion, finished } = state;
  return {
    questions,
    currentQuestion,
    finished
  };
}

export default connect(mapStateToProps)(Question);
