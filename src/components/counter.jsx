import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("Counter rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.getCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className={"btn btn-info btn-sm m-1"}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
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
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
