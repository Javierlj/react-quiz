import React from "react";
import PropTypes from "prop-types";
import stylePropType from "react-style-proptype";
import Button from "../../styles/Button";

import "./button.sass";

const CustomButton = props => {
  // eslint-disable-next-line react/destructuring-assignment
  const { style, name, buttonFunction } = props.button;
  const { disabled } = props;
  return style ? (
    <button
      type="button"
      style={style}
      onClick={buttonFunction}
      disabled={disabled}
    >
      {name}
    </button>
  ) : (
    <Button className="button" onClick={buttonFunction} disabled={disabled}>
      {name}
    </Button>
  );
};

CustomButton.propTypes = {
  button: PropTypes.shape({
    style: stylePropType,
    name: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func.isRequired
  }).isRequired,
  disabled: PropTypes.bool
};

CustomButton.defaultProps = {
  disabled: false
};

export default CustomButton;
