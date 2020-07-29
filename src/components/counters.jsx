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
  render() {
    
    return (
      <React.Fragment>
        <h4 style={this.titleStyle}>Hello Al!</h4>
        {/* array of 4 components */}
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Counter {counter.id}</h4>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
