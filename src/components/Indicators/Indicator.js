import React from "react";
import { PropTypes } from "prop-types";
import { Pagination } from "react-bootstrap";

import "./indicator.sass";

const Indicator = props => {
  const { number, onNumberSelect, active } = props;
  return (
    <Pagination.Item
      tabIndex={number}
      role="button"
      onClick={() => onNumberSelect(number)}
      className={active ? "active" : ""}
    >
      {number + 1}
    </Pagination.Item>
  );
};

Indicator.propTypes = {
  number: PropTypes.number.isRequired,
  onNumberSelect: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};
export default Indicator;
