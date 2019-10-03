import { initQuestions, reset } from "../redux/actions";

const getQuestionsFromApi = async () => {
  const response = await fetch(
    "https://quiz.dit.upm.es/api/quizzes/random10wa?token=1f92a6d7b7fd303df1aa"
  );
  const questions = await response.json();
  return questions;
};

const getQuestions = async dispatch => {
  const questions = await getQuestionsFromApi();
  dispatch(initQuestions(questions));
};

const resetQuestions = async dispatch => {
  const questions = await getQuestionsFromApi();
  dispatch(reset(questions));
};
export { getQuestions, resetQuestions };
