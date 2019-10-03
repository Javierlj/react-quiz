import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Question from './components/Question/question';
import { questionAnswer } from './redux/actions';
import Toast from './components/Toast';
import Buttons from './components/Buttons/Buttons';
import NavBar from './components/NavBar/NavBar';
import './Game.sass';
import { getQuestions } from './services/apiCalls';

const Game = (props) => {
  const { dispatch, questions, currentQuestion, score } = props;
  const onQuestionAnswer = (answer) => {
    dispatch(questionAnswer(currentQuestion, answer));
  };

  useEffect(() => {
    getQuestions(dispatch);
  }, []);

  return questions.length === 0 ? (
    <p>No hay preguntas</p>
  ) : (
      <div style={{ height: '100%' }}>
        <NavBar />
        <div className="game">
          <Question
            question={questions[currentQuestion]}
            onQuestionAnswer={(answer) => onQuestionAnswer(answer)}
          />
        </div>
        <Toast score={score || ''} finished={false} />
        <Buttons />
      </div>
    );
};

function mapStateToProps(state) {
  const { questions, currentQuestion } = state;
  return {
    questions,
    currentQuestion,
  };
}

export default connect(mapStateToProps)(Game);
