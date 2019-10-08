import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import ReactCountdownClock from "react-countdown-clock";

import { submit } from "../../redux/actions";

const CountDown = props => {
  const { finished, dispatch, questions } = props;

  return (
    <ReactCountdownClock
      size={100}
      paused={finished}
      seconds={10}
      onComplete={() => dispatch(submit(questions))}
    />
  );
};

CountDown.propTypes = {
  finished: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object)
};

CountDown.defaultProps = {
  questions: []
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(CountDown);
