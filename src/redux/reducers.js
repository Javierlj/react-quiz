import { combineReducers } from "redux";
import { QUESTION_ANSWER, INIT_QUESTIONS, SUBMIT } from "./actions";

function score(state = 0, action = {}) {
  switch (action.type) {
    case SUBMIT:
      return action.questions.filter(question => {
        return question.answer === question.userAnswer;
      }).length;
    default:
      return state;
  }
}
function finished(state = false, action = {}) {
  switch (action.type) {
    case SUBMIT:
      return true;

    default:
      return state;
  }
}

function questions(state = [], action = {}) {
  switch (action.type) {
    case QUESTION_ANSWER:
      return state.map((question, i) => {
        return {
          ...question,
          userAnswer:
            action.payload.index === i
              ? action.payload.answer
              : question.userAnswer
        };
      });

    case INIT_QUESTIONS:
      return action.questions;

    default:
      return state;
  }
}

const GlobalState = combineReducers({
  score,
  finished,
  questions
});

export default GlobalState;
