import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CustomButton from "./Button";
import { submit } from "../../redux/actions";
import "./buttons.sass";
import { resetQuestions } from "../../services/apiCalls";

const Buttons = props => {
  const { dispatch, questions } = props;
  const buttons = [
    {
      id: "1",
      name: "Submit",
      buttonFunction: () => dispatch(submit(questions))
    },
    { id: "2", name: "Reset", buttonFunction: () => resetQuestions(dispatch) }
  ];
  return (
    <div className="buttons">
      {buttons.map(button => (
        <CustomButton key={button.id} button={button} />
      ))}
    </div>
  );
};

Buttons.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    questions: state.questions
  };
}

export default connect(mapStateToProps)(Buttons);
