import React from "react";
import "./question.sass";

const Question = props => {
  const { question, onQuestionAnswer } = props;
  return (
    <div className="question">
      <img
        className="question_image"
        src={question.attachment.url}
        width={"500px"}
        alt={""}
      />
      <div>
        <p>{question.question}</p>
        <input
          type="text"
          value={question.userAnswer || ""}
          onChange={e => onQuestionAnswer(e.target.value)}
        />
        {question.tips.map(tip => {
          return <p>{tip}</p>;
        })}
      </div>
    </div>
  );
};

export default Question;
