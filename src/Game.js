import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Question from "./components/Question/question";
import { questionAnswer, initQuestions, submit } from "./redux/actions";

const Game = props => {
  const { dispatch, questions } = props;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  const onQuestionAnswer = answer => {
    dispatch(questionAnswer(index, answer));
  };
  useEffect(() => {
    fetch(
      "https://quiz.dit.upm.es/api/quizzes/random10wa?token=1f92a6d7b7fd303df1aa"
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        dispatch(initQuestions(myJson));
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <React.Fragment>
      <Carousel
        activeIndex={index}
        direction={direction}
        interval={null}
        onSelect={handleSelect}
      >
        {questions.map(question => {
          return (
            <Carousel.Item key={question.id}>
              <Question
                question={question}
                onQuestionAnswer={answer => onQuestionAnswer(answer)}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <button
        onClick={() => dispatch(submit(questions))}
        disabled={index === questions.length - 1 ? false : true}
      >
        Submit
      </button>
      <p>{props.score || ""}</p>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(Game);
