import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";

import { submit } from "../../redux/actions";

function CustomModal(props) {
  const { onHide, title, children, dispatch, questions } = props;
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
        <Button onClick={() => dispatch(submit(questions))}>Submit</Button>
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
  history: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
};

CustomModal.defaultProps = {
  children: []
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(CustomModal);
