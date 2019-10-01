export const QUESTION_ANSWER = "QUESTION_ANSWER";
export const INIT_QUESTIONS = "INIT_QUESTIONS";
export const SUBMIT = "SUBMIT";

export function questionAnswer(index, answer) {
  return { type: QUESTION_ANSWER, payload: { index, answer } };
}

export function initQuestions(questions) {
  return { type: INIT_QUESTIONS, questions };
}

export function submit(questions) {
  return { type: SUBMIT, questions };
}
