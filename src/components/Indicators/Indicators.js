import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { PropTypes } from "prop-types";
import { Pagination } from "react-bootstrap";
import Indicator from "./Indicator";
import { changeQuestion } from "../../redux/actions";

const Indicators = props => {
  const { length, dispatch, currentQuestion } = props;
  const handleNumberSelected = number => {
    dispatch(changeQuestion(number));
  };
  return (
    <Pagination className="indicators">
      {_.range(length).map(el => {
        return (
          <Indicator
            number={el}
            onNumberSelect={number => handleNumberSelected(number)}
            active={currentQuestion === el}
            key={el}
          />
        );
      })}
    </Pagination>
  );
};

Indicators.propTypes = {
  length: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  currentQuestion: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  const { questions, currentQuestion } = state;
  return {
    questions,
    currentQuestion
  };
}

export default connect(mapStateToProps)(Indicators);
