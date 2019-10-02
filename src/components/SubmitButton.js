import React from "react";
import Button from "react-bootstrap/Button";
import { submit } from "../redux/actions";
import Toast from "react-bootstrap/Toast";

const SubmitButton = props => {
  console.log(props);
  const { questions, dispatch } = props;
  return (
    <Button
      onClick={() => dispatch(submit(questions)) && <Toast useState={true} />}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
