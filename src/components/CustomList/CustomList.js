import React from "react";
import { ListGroup } from "react-bootstrap";
import { PropTypes } from "prop-types";
import "./customList.sass";

const CustomList = props => {
  const { title, listItems } = props;
  return (
    <div>
      <p className="title">{title}</p>
      {listItems.length === 0 ? (
        <p>No elements</p>
      ) : (
        <ListGroup>
          {listItems.map(item => {
            return <ListGroup.Item>{item}</ListGroup.Item>;
          })}
        </ListGroup>
      )}
    </div>
  );
};

CustomList.propTypes = {
  title: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string)
};

CustomList.defaultProps = {
  listItems: []
};

export default CustomList;
