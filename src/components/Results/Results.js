import React from "react";
import { PropTypes } from "prop-types";

import CustomButton from "../Buttons/Button";

const Results = props => {
  const { history } = props;

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
    buttonFunction: () => history.push("/"),
    style: buttonStyle
  };

  return (
    <div>
      <h1>PRUEBA</h1>
      <CustomButton button={backButton} />
    </div>
  );
};

Results.propTypes = {
  history: PropTypes.any.isRequired
};

export default Results;
