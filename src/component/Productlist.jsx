import React, { Component } from 'react'
import Product from "./Product";
import Seed from "./seed";

export class Productlist extends Component {
    constructor(props) {
        super();
        this.state={
            products:[],
        }

        this.handleProductUpVote = this.handleProductUpVote.bind(this); 
    }
   
    componentDidMount() {
        this.setState({ products: Seed.products });
    }
    // console.log(this.state.products)
    handleProductUpVote(productId){
        console.log(productId+ "is upvoted");
        const newelements=this.state.products.map((element)=>{
                   if(element.id===productId){
                    return Object.assign({}, element, {
                        votes: element.votes + 1,
                        });
                   }
                   else{
                       return element;
                   }
        });
       
       this.setState({
           products:newelements,
       })
    }
    render() {
        // console.log(seed.products)
       
        const nextProducts=this.state.products.sort((a,b)=>(
             b.votes-a.votes
        ))
        const ProductComponent=nextProducts.map((product)=>(
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVotes={this.handleProductUpVote}
            />
        ));
        return (
            <div className="items">
                 {ProductComponent}
            </div>
           
        );
    }
}

export default Productlist

