import React from 'react';
import {Button} from 'semantic-ui-react';


import Sidebar from '../../Sidebar/Sidebar';


class ssr extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="SSR_page">
                <h1 key={'header'} tyle={{ margin: "0" }}>{this.props.title || null}</h1>
                <Button primary={true} size={"big"} key={'test'} onClick={function(){
                    console.log('test button clicked');
                }}>Test button</Button>
            </div>
        )
    }


    componentDidMount(){
        console.log('rendered');
    }
}

export default ssr;