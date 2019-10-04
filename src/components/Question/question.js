import React from "react";
<<<<<<< Updated upstream
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
      <div className="question_main">
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
=======
import "./question.sass";
import { PropTypes } from "prop-types";

const Question = props => {
  const { question, onQuestionAnswer } = props;
  return (
    <div className="question">
      <div className="question_main">
>>>>>>> Stashed changes
        <img
          className="question_main_image"
          src={question.attachment.url}
          alt=""
        />
        <div className="question_main_data">
          <p className="question_main_text">{question.question}</p>
          <input
            className="question_main_input"
            type="text"
            value={question.userAnswer}
            onChange={e => onQuestionAnswer(e.target.value)}
          />
          <p className="question_main_tips">Tips</p>
          {question.tips.length === 0
            ? "No tips"
            : question.tips.map(tip => <p>{tip}</p>)}
        </div>
        <div className="question_bottom">
          <img
            className="question_author_photo"
            src={question.author.photo.url}
            alt=""
          />
          <p className="question_author_name">{question.author.username}</p>
        </div>
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
<<<<<<< Updated upstream
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
=======
      photo: PropTypes.string,
      username: PropTypes.string
    })
  }),
  onQuestionAnswer: PropTypes.func.isRequired
>>>>>>> Stashed changes
};

Question.defaultProps = {
  question: {
    attachment: {
      url: "https://www.bernardsqualitycars.com/dist/img/nophoto.jpg"
    },
    tips: [],
    userAnswer: "",
    author: {
<<<<<<< Updated upstream
      photo: {
        url: "http://k08.kn3.net/19B804182.jpg"
      },
=======
      photo: "http://k08.kn3.net/19B804182.jpg",
>>>>>>> Stashed changes
      username: "Sin autor"
    }
  }
};

<<<<<<< Updated upstream
function mapStateToProps(state) {
  const { questions, currentQuestion } = state;
  return {
    questions,
    currentQuestion
  };
}

export default connect(mapStateToProps)(Question);
=======
export default Question;

/* return (
    <div className="question">
      <div className="question_main">
        <img className="question_image" src={question.attachment.url} alt="" />
        <div className="question_info">
          <p class="question_text">{question.question}</p>
          <input
            className="question_input"
            type="text"
            value={question.userAnswer || ""}
            onChange={e => onQuestionAnswer(e.target.value)}
          />
          <p>Tips</p>
          {question.tips.length === 0
            ? "No tips"
            : question.tips.map(tip => <p>{tip}</p>)}
        </div>
      </div>
      <div className="question_bottom">
        <img
          className="question_author_photo"
          src={question.author.photo.url}
          alt=""
        />
        <p className="question_author_name">{question.author.username}</p>
      </div>
    </div>
  );
}; */
>>>>>>> Stashed changes
