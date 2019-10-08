import { initQuestions, reset } from "../redux/actions";
import { defaultQuestions } from "../defaultQuestion";

const getQuestionsFromApi = async () => {
  const response = await fetch(
    "https://quiz.dit.upm.es/api/quizzes/random10wa?token=1f92a6d7b7fd303df1aa"
  );
  const questions = await response.json();
  return questions;
};

const getQuestions = async dispatch => {
  let questions = await getQuestionsFromApi();
  questions = questions || defaultQuestions;
  dispatch(initQuestions(questions));
};

const resetQuestions = async dispatch => {
  let questions = await getQuestionsFromApi();
  questions = questions || defaultQuestions;
  dispatch(reset(questions));
};
export { getQuestions, resetQuestions };
