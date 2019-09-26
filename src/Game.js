import React, { Component } from "react";

export default class Game extends Component {
  render() {
    return (
      <div>
        {this.props.question.question}
        <input type={"text"} value={this.props.question.userAnswer} />
      </div>
    );
  }
}
