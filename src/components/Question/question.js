import React from 'react';
import './question.sass';
import { PropTypes } from 'prop-types';


const Question = (props) => {
  const { question, onQuestionAnswer } = props;
  return (
    <div className="question">
      <img className="question_image" src={question.attachment.url} alt="" />
      <div>
        <p>{question.question}</p>
        <input
          type="text"
          value={question.userAnswer}
          onChange={(e) => onQuestionAnswer(e.target.value)}
        />
        <p>Tips</p>
        {question.tips.length === 0
          ? 'No tips'
          : question.tips.map((tip) => <p>{tip}</p>)}
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
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    attachment: PropTypes.shape({
      url: PropTypes.string,
    }),
    tips: PropTypes.arrayOf(PropTypes.string),
    userAnswer: PropTypes.string,
    author: PropTypes.shape({
      photo: PropTypes.string,
      username: PropTypes.string,
    }),
  }),
  onQuestionAnswer: PropTypes.func.isRequired,
};

Question.defaultProps = {
  question: {
    attachment: {
      url: 'https://www.bernardsqualitycars.com/dist/img/nophoto.jpg',
    },
    tips: [],
    userAnswer: '',
    author: {
      photo: 'http://k08.kn3.net/19B804182.jpg',
      username: 'Sin autor',
    },
  },
};

export default Question;
