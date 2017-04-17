import React from 'react'

class CartMenu extends React.Component {

	constructor (props) {
		super(props);
		this.toggleCartModal = this.props.toggleCartModal.bind(this);
	}

	handleClick(e) {
		$('#cartModal').modal('show');
		// console.log(e);
	}

	render () {
		return (
			<div className="cart-menu-container" onClick={() => {this.handleClick(event)}} >
				<div className="cart-menu-content-container">
					<div className="cart-item-quantity">
						<i className="shop icon"></i>
						<span>{	 this.props.cartItems } item{this.props.cartItems > 1 ? 's' : ''}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default CartMenu;