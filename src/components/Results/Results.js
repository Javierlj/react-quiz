import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Table } from "react-bootstrap";

import "./results.sass";
import CustomButton from "../Buttons/Button";
import { resetQuestions } from "../../services/apiCalls";

const Results = props => {
  const { history, questions, score, dispatch } = props;

  const buttonStyle = {
    background: "transparent",
    fontSize: "16px",
    borderRadius: "3px",
    color: "palevioletred",
    border: "2px solid palevioletred",
    margin: "0 1em",
    padding: " 0.25em 1em"
  };

  const backButton = {
    name: "Go Back",
    buttonFunction: () => resetQuestions(dispatch) && history.push("/"),
    style: buttonStyle
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
              <td>{question.answer}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="table_score">
        <td colSpan="3">Your Score is: {score}</td>
        <CustomButton button={backButton} />
      </div>
    </div>
  );
};

Results.propTypes = {
  history: PropTypes.any.isRequired
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Results);
