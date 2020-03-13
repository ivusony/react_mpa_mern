import React from 'react';
import {Image, Card} from 'semantic-ui-react';


export default class Box extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        return(
            <div className="Box">
                <Card>
                    <Image wrapped fluid src={this.props.url} />
                    <Card.Content>
                        <Card.Header>Test Header</Card.Header>
                        <Card.Meta>Price</Card.Meta>
                        <Card.Description>A nice computer</Card.Description>
                    </Card.Content>
                </Card>
            </div>
        )
    }

    componentDidMount(){
        
    }
}