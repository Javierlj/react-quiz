import React from 'react';
import './question.sass';

const Question = (props) => {
  const { question, onQuestionAnswer } = props;
  return (
    <div className="question">
      <img className="question_image" src={question.attachment.url} alt="" />
      <div>
        <p>{question.question}</p>
        <input
          type="text"
          value={question.userAnswer || ''}
          onChange={(e) => onQuestionAnswer(e.target.value)}
        />
        <p>Tips</p>
        {question.tips.length === 0 ? 'No tips' : question.tips.map((tip) => <p>{tip}</p>)}
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

export default Question;
