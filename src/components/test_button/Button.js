import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import '../test_button/button.css'

var buttonStyle = {
    width       : "100%",
    borderRadius: "0 !important",
    padding     : ".5rem !important",
    textAlign   : "left !important"
}

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="ui button" style={buttonStyle} onClick={this.props.CB}>{this.props.Title}</button>
        )
    }
}


export default Button;