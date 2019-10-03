import React from "react";
import "./question.sass";
import defaultProps from "prop-types";

const Question = props => {
  const { question, onQuestionAnswer } = props;
  return (
    <div className="question">
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
  question: propTypes.shape({
    question: PropTypes.string.isRequired,
    attachment: propTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired,
    tips: PropTypes.arrayOf(PropTypes.string),
    userAnswer: PropTypes.string,
    author: propTypes.shape({
      photo: PropTypes.string,
      username: PropTypes.string
    })
  }).isRequired,
  onQuestionAnswer: PropTypes.func.isRequired
};

Question.defaultProps = {};

export default Question;
