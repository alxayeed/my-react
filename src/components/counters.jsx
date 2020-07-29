import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  titleStyle = {
    backgroundColor: "#aaa",
    textAlign: "center",
  };

  handleDelete = (counterId) =>  {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <h4 style={this.titleStyle}>Hello Al!</h4>
        {/* array of 4 components */}
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter = {counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
