import React from 'react';
import Button from 'react-bootstrap/Button';

import './button.sass';

const CustomButton = (props) => {
  const { style, name, buttonFunction } = props.button;
  return (
    style
      ? <button style={style} onClick={buttonFunction}>{name}</button>
      : <Button className="button" onClick={buttonFunction}>{name}</Button>

  );
};

export default CustomButton;
