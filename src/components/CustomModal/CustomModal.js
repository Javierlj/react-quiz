import React from "react";
import { Modal, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";

function CustomModal(props) {
  const { onHide, title, children, history } = props;
  return (
    <Modal
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => history.push("/results")}>Submit</Button>
        <Button variant="danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

CustomModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
  history: PropTypes.any.isRequired
};

CustomModal.defaultProps = {
  children: []
};

export default CustomModal;
