export const QUESTION_ANSWER = "QUESTION_ANSWER";
export const INIT_QUESTIONS = "INIT_QUESTIONS";
export const SUBMIT = "SUBMIT";
export const RESET = "RESET";
export const NEXT_QUESTION = "NEXT_QUESTION";
export const PREVIOUS_QUESTION = "PREVIOUS_QUESTION";
export const CHANGE_QUESTION = "CHANGE_QUESTION";
export const LOADING = "LOADING";

export function questionAnswer(index, answer) {
  return { type: QUESTION_ANSWER, payload: { index, answer } };
}

export function initQuestions(questions) {
  return { type: INIT_QUESTIONS, questions };
}

export function submit(questions) {
  return { type: SUBMIT, questions };
}

export function reset(questions) {
  return { type: RESET, questions };
}

export function nextQuestion() {
  return { type: NEXT_QUESTION };
}
export function previousQuestion() {
  return { type: PREVIOUS_QUESTION };
}

export function changeQuestion(index) {
  return { type: CHANGE_QUESTION, index };
}

export function loading() {
  return { type: LOADING };
}
