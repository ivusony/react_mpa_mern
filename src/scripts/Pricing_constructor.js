import React from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import Container from '../components/Container/Container';

import Pricing_content from '../components/pages/pricing/Pricing'


export default class Pricing extends React.Component{
    constructor (props){
        super(props);
        this.state = {

        }
    }

    
    render(){
        return(
            <div className="Pricing">
                <Sidebar />
                <Container>
                    <Pricing_content />
                </Container>
            </div>
        )
    }
}