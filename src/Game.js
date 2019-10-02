import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Question from "./components/Question/question";
import { questionAnswer, initQuestions, submit } from "./redux/actions";
import Button from "react-bootstrap/Button";
import Toast from "./components/Toast";

const Game = props => {
  const { dispatch, questions } = props;
  const [index, setIndex] = useState(0);
  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
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
  return questions.length === 0 ? (
    <p>No hay preguntas</p>
  ) : (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand ml-xl-5">QuizGame</span>
      </nav>
      <Carousel
        activeIndex={index}
        interval={null}
        onSelect={handleSelect}
        wrap={false}
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
      <Toast score={props.score || ""} finished={props.finished} />
      <Button
        onClick={() => dispatch(submit(questions)) && <Toast useState={true} />}
      >
        Submit
      </Button>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(Game);
