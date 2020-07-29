import React, { Component } from "react";

class Counter extends Component {

    state = {
        count: 4,
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
                <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>

                {/* style 3 - as a class (RECOMMENDED) */}
            <button className="btn btn-secondary btn-sm">Increment</button>
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
}

export default Counter;
