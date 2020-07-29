import React, { Component } from "react";

class Counter extends Component {

    state = {
        count: 4,
        tags: ['tag 1', 'tag 2', 'tag 3']
    };

    style = {
        fontSize: 20,
        fontWeight: "bold",
    }

    render() {
        return (
            <React.Fragment>
                <h4 style={{ backgroundColor: '#aaa', textAlign: "center" }}>Hello Al!</h4>

                <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>

                <button onDoubleClick={this.incrementClicked} className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
        );
    }

    // Dynamic styling
    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += (this.state.count < 5) ? "warning" : "success";
        return classes;
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? 'Zero ' : count;
    }

    incrementClicked() {
        console.log("Increment clicked")
    }
}

export default Counter;
