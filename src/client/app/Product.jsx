import React from 'react';

class Product extends React.Component {

	constructor (props) {
		super(props);
		// this.addCartItems = this.props.addCartItems.bind(this);
		// this.addCartItems = this.props.addCartItems.bind(this);
	}

	test () {
		// console.log(this.props.product);
	}

	handleClick (e) {
		this.props.addCartItems();
	}

	render () {

		var prod = this.props.product;

		var btnCartClass = prod.quantity > 0 ? '' : ' disabled';
		return (
			<div className="product-container">
			  	<img src="../files/images/testImg.jpg" className="prod-img"/>
				<div className="prod-details-container ui tag labels">
					<a className="ui floating teal label">
				    	{'$ ' + this.props.product.price.toFixed(2)}
				  	</a>
					<h5>
						{this.props.product.productName}
					</h5>
					<p>
						<span>Description</span> : {this.props.product.desc}
					</p>
					<p>
						<span>Stocks</span> : {this.props.product.quantity}
					</p>
					<div className={'add-to-cart-btn ui animated button' + btnCartClass} tabIndex="0">
					  <div className="hidden content" onClick={() => {this.props.addCartItems(prod, 1);}}>Buy</div>
					  <div className="visible content">
					    <i className="add to cart icon"></i>
					  </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;