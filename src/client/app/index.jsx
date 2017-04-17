import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Header from './Header.jsx';
import CartMenu from './CartMenu.jsx';
import ProductsBodyContainer from './ProductsBodyContainer.jsx';
import CartModal from './CartModal.jsx';
import AddProductModal from './AddProductModal.jsx';

class App extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			items : 0,
      modalCartToggle : false,
      products : [
        {
          id : 1, 
          productName : 'fita',
          desc : 'this is a type of biscuit',
          quantity : 3,
          price : 30.30
        }, 
        {
          id : 2, 
          productName : 'skyflakes',
          desc : 'this is another type of biscuit',
          quantity : 2,
          price : 100.7
        }, 
        {
          id : 3, 
          productName : 'kingflakes',
          desc : 'this is another type of biscuit',
          quantity : 2,
          price : 50.123
        }, 
        {
          id : 4, 
          productName : 'magicflakes',
          desc : 'still a flake biscuit',
          quantity : 2,
          price : 50.50
        }, 
        {
          id : 5, 
          productName : 'ace',
          desc : 'this is also a biscuit',
          quantity : 25,
          price : 14.25
        }
      ],
      productsInCart : []
		};
    this.addCartItems = this.addCartItems.bind(this);
    this.toggleCartModal = this.toggleCartModal.bind(this);
    this.addNewProduct = this.addNewProduct.bind(this);
	}

	addCartItems (product, quantity) {
    console.log('toggle test');
		var newQuantity = this.state.items + quantity;
    var newProductsInCart = this.state.productsInCart;

    var canAddItem = this.state.products.some(function (prod) {

      if (prod.id == product.id) {
        if (prod.quantity - quantity >= 0) {
          prod.quantity = prod.quantity - quantity;
          return true;
        }
      }

      return false;
    });
    
    if (canAddItem) {
      var res = newProductsInCart.some(function (prod) {

        if (prod.id == product.id) {
          prod.quantity = prod.quantity + quantity;
        }

        return prod.id == product.id ? prod : false;
      });

      if (!res) {
        var newItem = {
          id : product.id,
          quantity : quantity,  
          productName : product.productName,
          desc : product.desc,
          price : product.price
        };

        newProductsInCart.push(newItem);
      }

      var newItems = this.state.items + quantity;

      this.setState({ items : newItems });
      this.setState({ productsInCart : newProductsInCart });
    }

    
	}

  toggleCartModal () {
    
    var newModalCartToggle = !this.state.modalCartToggle;
    this.setState({ modalCartToggle : newModalCartToggle });

  }

  handleAddProductClick () {
    $('#addProductModal').modal('show');
  }

  addNewProduct (newProd) {
    var newProducts = this.state.products;
    newProd.id = this.state.products[this.state.products.length - 1].id + 1;
    newProducts.push(newProd);
    this.setState({products : newProducts});
  }

  render () {

  	return (
    	<div>
    		<Header />
        <div className="our-prod-label">
          <h1>
            Our Products
          </h1>
          <div className="ui positive animated fade button add-prod" id="addProduct" tabIndex="0" onClick={this.handleAddProductClick}>
              <div className="visible content">+ Add</div>
              <div className="hidden content">
                + Add
              </div>
          </div>
        </div>
    		<CartMenu cartItems={this.state.items} toggleCartModal={this.toggleCartModal}/>
        <ProductsBodyContainer addCartItems={this.addCartItems} products={this.state.products}/>
        <CartModal modalCartToggle={this.state.modalCartToggle} cartItems={this.state.productsInCart}/>
        <AddProductModal addNewProduct={this.addNewProduct}/>
    		<AwesomeComponent items={this.state.items} />
    	</div>
  	);
  }
}

render(<App/>, document.getElementById('app'));