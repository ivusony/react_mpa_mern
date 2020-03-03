import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../test_button/button.css'

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="ui button" onClick={this.props.CB}>{this.props.Title}</button>
        )
    }
}


export default Button;