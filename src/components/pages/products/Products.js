import React from 'react';
import './products.css';


export default class Products_content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products : null,
            isLoaded : false
        }
    }

    render(){

        var content = null;

        if(this.state.isLoaded){
                content = this.state.products.map(product =>{
                         return (
                             <div className="four wide column" Style="margin-bottom: 1rem">
                                <div className="card_container">
                                    <div className="card">
                                        <div className="content">
                                            <div className="header">
                                                {product.name}
                                            </div>
                                            <div className=" meta">
                                                 <h3>{product.username}</h3>
                                            </div>
                                            <div className="description">
                                                {product.email}
                                            </div>

                                            <div className="extra content">
                                                <button className="ui mini fluid labeled icon button" data-product_id={product.id}>
                                                    <i className="dollar icon"></i>
                                                    Buy product
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                                 
                             </div>




                         )
                     }
                )
        } else {
            content = <div className="ui inline active centered loader"></div>
        }

      
        return (
            <div className="ui padded grid">
                <div className="row">
                    <div className="column">
                        <h1>{this.props.title}</h1>
                    </div>
                </div>
                <div className="row">
                    {content}
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(rawdata => rawdata.json())
        .then(json => {
            this.setState({isLoaded : true ,products : json})
        })
    }
}
