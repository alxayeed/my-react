import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag 1", "tag 2", "tag 3"],
  };

  style = {
    fontSize: 20,
    fontWeight: "bold",
  };

  // constructor() {
  //     super()
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <h4 style={{ backgroundColor: "#aaa", textAlign: "center" }}>
          Hello Al!
        </h4>

        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={this.handleIncrement}
          className={this.getIncrementButtonclasses()}
        >
          Increment
        </button>

        <button
          onClick={this.handleDecrement}
          className={this.getDecrementButtonclasses()}
        >
          Decrement
        </button>
      </React.Fragment>
    );
  }

  // Dynamic styling
  getBadgeClasses() {
    let classes = "badge m-1 badge-";

    if (this.state.count < 3) {
      classes += "danger";
    } else if (this.state.count < 5) {
      classes += "warning";
    } else if (this.state.count < 10) {
      classes += "info";
    } else {
      classes += "success";
    }
    // classes += (this.state.count < 5) ? "warning" : "success";
    return classes;
  }

  getIncrementButtonclasses() {
    let classes = "btn btn-sm m-1 btn-";

    if (this.state.count < 3) {
      classes += "danger";
    } else if (this.state.count < 5) {
      classes += "warning";
    } else if (this.state.count < 10) {
      classes += "info";
    } else {
      classes += "success";
    }

    return classes;
  }
    
  getDecrementButtonclasses() {
    let classes = "btn btn-sm m-1 btn-";

    if (this.state.count < 3) {
      classes += "success";
    } else if (this.state.count < 5) {
      classes += "info";
    } else if (this.state.count < 10) {
      classes += "warning";
    } else {
      classes += "danger";
    }

    return classes;
    }


  formatCount() {
    const { count } = this.state;
    return count === 0 ? 0 : count;
  }
}

export default Counter;
