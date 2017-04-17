import React from 'react';

class AwesomeComponent extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      cartItems : 0
    };
    // this.onLike = this.onLike.bind(this);
    // this.addItems;

    // var test = props.addCartItems.bind(this);
  }

  // addCartItems () {
  //   var newCartItems = this.state.cartItems + 1;
  //   this.setState({cartItems : newCartItems});
  //   // console.log(1);
  // }

  handleClick (e) {
    // console.log(this.props.test);
    // this.props.addCartItems;
  }

  render() {
    return <div></div>;
    // (
    //   // <div>
    //   //   Likes : <span>{this.state.cartItems}</span>
    //   //   <div><button onClick={this.props.addCartItems}>Like Me</button></div>
    //   // </div>
    // );
  }

}

export default AwesomeComponent;