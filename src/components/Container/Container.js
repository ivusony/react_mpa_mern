import React from 'react';

import '../Container/container.css'

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded : false
        }
    }

    render(){
        return(            
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}


export default Container;