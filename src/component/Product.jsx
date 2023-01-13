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
            <div className='item'>
                <div className='image cart'>
                    <img src={this.props.productImageUrl} alt=" cant" />
                </div>
                <div className='middle aligned content'>
                    <div className='header' onClick={this.handleUpVote}>
                        <a>
                            <i className='large caret up icon' />
                        </a>
                       <h3 class="votes">{this.props.votes}</h3> 
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>
                           <h2>
                             {this.props.title}
                            </h2> 
                        </a>
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                            <img
                                className="avatar"
                                 src={this.props.submitterAvatarUrl}
                                // src="https://rb.gy/lls0iq"
                                // src={img}
                                alt=" cant"
                            />
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Product

