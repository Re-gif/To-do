import React, { Component } from 'react';
class Note extends Component{

    render() {
        return (
            <div className="note" onclick={this.props.deletedMethod}>
{this.props.text}
            </div>
        )
    }
}

export default Note
