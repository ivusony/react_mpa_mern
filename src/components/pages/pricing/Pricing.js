import React from 'react';
import { Grid, Icon, Label, Menu, Table} from 'semantic-ui-react';


import './pricing.css';


export default class Pricing_content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products : null,
            isLoaded : false
        }
    }

    render(){
        console.log('rendered');
        return (
        this.state.isLoaded ? 
            <div>
                <Table celled >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Product ID</Table.HeaderCell>
                            <Table.HeaderCell>Product title</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.products.map(product => {
                            return (
                                <Table.Row id={product.id} key={product.id} onClick={(event)=>{this.rowClick($('tr#' + product.id))}}>
                                    <Table.Cell>
                                        <Label ribbon size="tiny">{product.id}</Label>
                                    </Table.Cell>
                                    <Table.Cell>{product.title}</Table.Cell>
                                    <Table.Cell>{product.body}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                        
                    </Table.Body>
                </Table>
                </div> : <Grid><Grid.Column><div className="ui inline active centered loader"></div></Grid.Column></Grid>   
            )
        
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({products : data, isLoaded : true}))
    }

    rowClick(target){
        target.toggleClass('active')
    }
}