import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import CustomButton from "../Buttons/Button";
import "./question.sass";
import { nextQuestion, previousQuestion } from "../../redux/actions";

const Question = props => {
  const {question,
    onQuestionAnswer,
    dispatch,
    currentQuestion,
    questions} = props;

  const buttonStyle = {
    "background-color": "transparent",
    color: "white",
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
      <CustomButton button={previousButton} disabled={currentQuestion === 0} />
      <img className="question_image" src={question.attachment.url} alt="" />
      <div>
        <p>{question.question}</p>
        <input
          type="text"
          value={question.userAnswer || ""}
          onChange={e => onQuestionAnswer(e.target.value)}
        />
        <p>Tips</p>
        {question.tips.length === 0
          ? "No tips"
          : question.tips.map(tip => <p>{tip}</p>)}
      </div>
      <CustomButton
        button={nextButton}
        disabled={currentQuestion === questions.length - 1}
      />
      <div>
        <img
          className="question_author_photo"
          src={question.author.photo.url}
          alt=""
        />
        <p className="question_author_name">{question.author.username}</p>
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
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
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
  const { questions, currentQuestion } = state;
  return {
    questions,
    currentQuestion
  };
}

export default connect(mapStateToProps)(Question);
