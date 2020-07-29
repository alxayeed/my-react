import React, { Component } from "react";

class Counter extends Component {

    state = {
        count: 5,
    };

    style = {
        fontSize: 20,
        fontWeight: "bold",
    }

    render() {
        return (
            <React.Fragment>
                {/* style 1-as a variable */}
                <h4 style={{ backgroundColor: '#aaa', textAlign: "center" }}>Hello Al!</h4>

                {/* style 2 - as property */}
                <span style={this.style} className="badge badge-success m-3">{this.formatCount()}</span>
                
                {/* style 3 - as a class (RECOMMENDED) */}
            <button className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? 'Zero ' : count;
    }
}

export default Counter;
