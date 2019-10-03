import { initQuestions } from '../redux/actions';

const getQuestions = (dispatch) => {
  fetch(
    'https://quiz.dit.upm.es/api/quizzes/random10wa?token=1f92a6d7b7fd303df1aa',
  )
    .then((response) => response.json())
    .then((myJson) => {
      dispatch(initQuestions(myJson));
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error));
};

export default getQuestions;
