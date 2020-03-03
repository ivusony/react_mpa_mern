import React from 'react';

import './home.css';


class Home_content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fetchedData: {
                userId: undefined,
                title: undefined
            },
            isLoaded: false
        }
    }

    render() {
        let content;

        if (this.state.isLoaded) {
            content = <div>
                <h4>Fetched data</h4>
                <p>{this.state.fetchedData.userId || undefined}</p>
                <p>{this.state.fetchedData.title || undefined}</p>
                <p>{this.state.fetchedData.something || "undefined"}</p>
                <button className="ui primary mini fluid button btn" onClick={() => { testEvent($('.btn')) }}>Test button</button>
            </div>
        } else {
            content = <div className="ui inline active centered loader"></div>
        }


        function testEvent(that) {
            that.toggleClass('primary')
        }

        return (
            <div className="content">
                <h1>{this.props.title}</h1>
                <div className="ui three column padded grid">
                    <div className="center aligned column">
                        {content}
                    </div>
                    <div className="center aligned column">
                        <h4>Column 2</h4>
                    </div>
                    <div className="center aligned column">
                        <h4>Column 3</h4>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                this.setState({ fetchedData: json, isLoaded: true })
            })
    }
}



export default Home_content;