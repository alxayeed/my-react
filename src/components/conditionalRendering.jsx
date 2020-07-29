import React, { Component } from 'react';


class Counter extends Component {
    state = {
        tags : []
    }
    
    
    /* Conditional Rendering */
    renderTags() {
        if (this.state.tags.length === 0) return <p>The Tag is Empty!</p>;

        return this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    }

    render() {
        return (
            <React.Fragment>

                {/* Conditional Rendering */}
                <ul>
                    <h5>{this.renderTags()}</h5>
                    {this.state.tags.length === 0 && <i><p>Please add something into the tag</p></i>}
                </ul>
            </React.Fragment>
        );
    
    };

};
 
export default Counter;
