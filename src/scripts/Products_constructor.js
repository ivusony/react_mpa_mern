import React from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import Container from '../components/Container/Container';


import Products_content from '../components/pages/products/Products';


class Products extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="Products">
                <Sidebar/>
                <Container>
                    <Products_content title="Products page"/>
                </Container>                
            </div>
        )
    }
}


export default Products;