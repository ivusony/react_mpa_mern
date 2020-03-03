import React from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import Container from '../components/Container/Container';

import Home_content from '../components/pages/home/Home'


import './home.css';

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="Home">
                <Sidebar/>
                <Container>
                    <Home_content title="React Home Page"/>
                </Container>                
            </div>
        )
    }
}


export default Home;