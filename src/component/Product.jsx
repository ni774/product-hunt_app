import React, { Component } from 'react'
import "./Product.css";
import img from "../image/avatarImage/nikhil.jpeg"

export class Product extends Component {
  
    constructor(props) {
        super(props);
       
        this.handleUpVote = this.handleUpVote.bind(this);
     }
    handleUpVote=()=>{
        this.props.onVotes(this.props.id)
       
    }

       
    render() {
      
        return (
            <div className='item animate__animated animate__pulse'>
                {/*=============== product img================= */}
                <div className='image cart'>
                    <img className="product_img" src={this.props.productImageUrl} alt="cant" />
                    {console.log("img",this.props.productImageUrl)}
                </div>

                {/*=============== product description================= */}
                <div className='middle aligned content'>
                    <div className='description left_part'>
                        {/* <a className="product-name" href={this.props.url}> */}
                           <h2 className='product_title'>
                             {this.props.title}
                            </h2> 
                        {/* </a> */}
                        <p>
                            {this.props.description}
                        </p>
                        <span className='price'><i class="fa fa-inr"></i>{this.props.price}</span>
                        
                            <button className='visit_button'>
                                <a className="visit_product" href={this.props.url}>visit </a>
                            </button>
                       
                    </div>
                    <div className='right_part'>
                        { /*****************votes */ }
                        <div style={{display:"flex"}}>
                            <span className=''><i class=" blink fa fa-hand-o-right" aria-hidden="true"></i></span>
                            <div className='header' onClick={this.handleUpVote}>
                                <a>
                                    <i className='large caret up icon' />
                                </a>
                               <h3 class="votes">{this.props.votes}</h3> 
                            </div>
                        </div>
                        { /****************************submiter info */}
                        <div className='extra'>
                            <span>seller:</span>
                                <img
                                    className="avatar"
                                    //  src={this.props.submitterAvatarUrl}
                                    // // src="https://rb.gy/lls0iq"
                                    src={img}
                                    alt=" cant"
                                />       
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product

