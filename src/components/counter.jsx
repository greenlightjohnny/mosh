import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No renderTags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please Create a new Tag"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
