import React from 'react';

// import '../Container/container.css'

var containerStyle = {
    width: "90%",
    minWidth: "1000px",
    height: "100%",
    boxSizing: "border-box",
    display: "inline-block",
    overflowY: "scroll"
}

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded : false
        }
    }

    render(){
        return(            
            <div className="container" style={containerStyle}>
                {this.props.children}
            </div>
        )
    }
}


export default Container;