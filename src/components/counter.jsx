import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
    render() {

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.getCount()}</span>
        <button onClick={this.handleIncrement} className={"btn btn-info m-1"}>
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-1 badge-";
    classes += "warning";

    return classes;
  }

  getCount() {
    const value = this.state.value;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
