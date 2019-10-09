import React from "react";
import { PropTypes } from "prop-types";
import { Pagination } from "react-bootstrap";

import "./indicator.sass";

const Indicator = props => {
  const { number, onNumberSelect, active, answered } = props;

  const activeStyles = () => {
    let styles = "";
    styles += active ? "borderSelected" : "";
    styles += answered ? "active" : "";
    return styles;
  };

  return (
    <Pagination.Item
      tabIndex={number}
      role="button"
      onClick={() => onNumberSelect(number)}
      className={activeStyles()}
    >
      {number + 1}
    </Pagination.Item>
  );
};

Indicator.propTypes = {
  number: PropTypes.number.isRequired,
  onNumberSelect: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  answered: PropTypes.bool.isRequired
};

export default Indicator;
