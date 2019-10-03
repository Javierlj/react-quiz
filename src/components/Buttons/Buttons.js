import React from 'react';
import { connect } from 'react-redux';

import CustomButton from './Button';
import { submit, reset } from '../../redux/actions';
import './buttons.sass';


const Buttons = (props) => {
  const { dispatch, questions } = props;
  const buttons = [
    { id: '1', name: 'Submit', buttonFunction: () => dispatch(submit(questions)) },
    { id: '2', name: 'Reset', buttonFunction: () => dispatch(reset(questions)) },
  ];
  return (
    <div className="buttons">
      {buttons.map((button) => <CustomButton key={button.id} button={button} />)}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    questions: state.questions,
  };
}

export default connect(mapStateToProps)(Buttons);
