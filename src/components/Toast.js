import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Toast = props => {
  const [show, setShow] = useState(false);
  const { score, finished } = props;

  useEffect(() => {
    setShow(finished);
  }, [finished]);
  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>You got {score} rigth!</Alert.Heading>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            X
          </Button>
        </div>
      </Alert>
    </>
  );
};

export default Toast;
