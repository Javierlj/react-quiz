import { combineReducers } from "redux";

import {QUESTION_ANSWER,
  INIT_QUESTIONS,
  SUBMIT,
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
  CHANGE_QUESTION,
  RESET,
  LOADING} from "./actions";

function score(state = 0, action = {}) {
  switch (action.type) {
    case SUBMIT:
      return action.questions.filter(
        question => question.answer === question.userAnswer
      ).length;
    case RESET:
      return 0;
    default:
      return state;
  }
}
function finished(state = false, action = {}) {
  switch (action.type) {
    case SUBMIT:
      return true;
    case RESET:
      return false;
    default:
      return state;
  }
}

function currentQuestion(state = 0, action = {}) {
  switch (action.type) {
    case NEXT_QUESTION:
      return state + 1;
    case PREVIOUS_QUESTION:
      return state - 1;
    case CHANGE_QUESTION:
      return action.index;
    case RESET:
      return 0;
    default:
      return state;
  }
}

function questions(state = [], action = {}) {
  switch (action.type) {
    case QUESTION_ANSWER:
      return state.map((question, i) => ({
        ...question,
        userAnswer:
          action.payload.index === i
            ? action.payload.answer
            : question.userAnswer
      }));

    case INIT_QUESTIONS:
      return action.questions;
    case RESET:
      return action.questions;
    default:
      return state;
  }
}

function loading(state = [], action = {}) {
  switch (action.type) {
    case INIT_QUESTIONS:
      return false;
    case RESET:
      return false;
    case LOADING:
      return true;
    default:
      return state;
  }
}

const GlobalState = combineReducers({
  score,
  finished,
  questions,
  currentQuestion,
  loading
});

export default GlobalState;
