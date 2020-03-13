import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from '../test_button/Button';

// import '../Sidebar/sidebar.css';

var sidebar_main_style = {
    minWidth        : "100px",
    maxWidth        : "10%",
    height          : "100%",
    backgroundColor : "#E0E1E2",
    boxSizing       : "border-box",
    display         : "inline-block",
    position        : "sticky !important",
    position        : "-webkit-sticky",
    top             : "0px !important"
}


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar_main" style={sidebar_main_style}>
                <Button Title="Home"            key={'home'}        CB={ () => { console.log("HOME PAGE") } }    />
                <Button Title="Products"        key={'products'}    CB={ () => { console.log("PRODUCTS PAGE") }} />
                <Button Title="Pricing"         key={'pricing'}     CB={ () => { console.log("PRICING PAGE") }}  />
                <Button Title="Contact"         key={'contant'}     CB={ () => { console.log("CONTACT PAGE") }}  />
                <Button Title="About"           key={'about'}       CB={ () => { console.log("ABOUT PAGE") }} />
                <Button Title="SSR page test"   key={'ssr'}         CB={ () => { console.log("SSR PAGE") }} />
            </div>
        )
    }
}


export default Sidebar;