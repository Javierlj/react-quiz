import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Table } from "react-bootstrap";
import stylePropType from "react-style-proptype";

import "./results.sass";
import CustomButton from "../Buttons/Button";
import { resetQuestions } from "../../services/apiCalls";

const Results = props => {
  const { history, questions, score, dispatch, style } = props;

  const backButton = {
    name: "Go Back",
    buttonFunction: async () => {
      await resetQuestions(dispatch);
      history.push("/");
    },
    style
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{question.question}</td>
              <td>
                {question.answer === question.userAnswer ? (
                  <p style={{ color: "green" }}>{question.userAnswer}</p>
                ) : (
                  <p>
                    <del style={{ color: "red" }}>{question.userAnswer}</del>
                    {question.answer}
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="table_score">
        <td colSpan="3" style={{ fontSize: 24 }}>
          <b>
            Your Score is: 
{' '}
{score}
            /10
          </b>
        </td>
        <CustomButton button={backButton} />
      </div>
    </div>
  );
};

Results.propTypes = {
  history: PropTypes.any.isRequired,
  score: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  style: stylePropType.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Results);
