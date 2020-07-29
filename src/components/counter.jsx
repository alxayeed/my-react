import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
    render() {
    console.log(this.props);
    return (
        <div>
            <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.getCount()}</span>
        <button onClick={this.handleIncrement} className={"btn btn-info btn-sm m-1"}>
                Increment
        </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
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
