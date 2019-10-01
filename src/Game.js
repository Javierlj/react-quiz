import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class Game extends Component {
  render() {
    const { questions } = this.props;
    return (
      <Carousel>
        {questions.map(question => {
          return (
            <Carousel.Item key={question.id}>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt={question.question}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}
