import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from '../test_button/Button';

import '../Sidebar/sidebar.css';


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar_main">
                <Button Title="Home"        CB={ () => { location.href = '/'} } />
                <Button Title="Products"    CB={ () => { location.href = '/products'}} />
                <Button Title="Pricing"     CB={ () => { location.href = '/pricing' }} />
                <Button Title="Contact" />
                <Button Title="About" />
            </div>
        )
    }
}


export default Sidebar;