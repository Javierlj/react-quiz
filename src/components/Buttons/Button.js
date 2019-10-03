import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import './button.sass';

const CustomButton = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { style, name, buttonFunction } = props.button;
  return (
    style
      ? <button type="button" style={style} onClick={buttonFunction}>{name}</button>
      : <Button className="button" onClick={buttonFunction}>{name}</Button>

  );
};

CustomButton.propTypes = {
  button: PropTypes.shape({
    style: stylePropType,
    name: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func.isRequired,
  }).isRequired,
};


export default CustomButton;
