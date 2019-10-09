/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CustomButton from "./Button";
import "./buttons.sass";
import { resetQuestions } from "../../services/apiCalls";
import CustomModal from "../CustomModal/CustomModal";

const Buttons = props => {
  const { dispatch, history, questions } = props;
  const [modalShow, setModalShow] = React.useState(false);
  const questionsResolved = questions.filter(question => question.userAnswer)
    .length;
  const questionsLength = questions.length;
  const buttons = [
    {
      id: "1",
      name: "Submit",
      buttonFunction: () => setModalShow(true)
    },
    { id: "2", name: "Reset", buttonFunction: () => resetQuestions(dispatch) }
  ];
  return (
    <div className="buttons">
      {buttons.map(button => (
        <CustomButton key={button.id} button={button} />
      ))}
      <CustomModal
        title="Are you sure you want to submit your answers?"
        show={modalShow}
        history={history}
        onHide={() => setModalShow(false)}
      >
        <p>
          You have answered {questionsResolved}/{questionsLength} questions
        </p>
        <p>Check you have answered everything before submitting! </p>
      </CustomModal>
    </div>
  );
};

Buttons.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {
    questions: state.questions
  };
}

export default connect(mapStateToProps)(Buttons);
