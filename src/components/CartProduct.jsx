import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartProduct extends Component {
  constructor(props) {
    super(props);

    const { product: { id }, cartProducts } = props;
    const initalQuantity = cartProducts.filter((product) => product.id === id).length;

    this.state = {
      quantity: initalQuantity,
    };
  }

  render() {
    const { product, addProduct, decrementProduct, removeAllProduct } = this.props;
    const { quantity } = this.state;
    return (
      <section key={ product.id }>
        <p data-testid="shopping-cart-product-name">{ product.title }</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{ product.price }</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => {
            decrementProduct();
            if (quantity > 1) {
              this.setState((prevState) => ({
                quantity: prevState.quantity - 1 }));
            }
          } }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          {' '}
          {quantity}
        </p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => {
            addProduct();
            this.setState((prevState) => ({
              quantity: prevState.quantity + 1 }));
          } }
        >
          +
        </button>
        <button
          type="button"
          onClick={ () => {
            removeAllProduct();
            this.setState({ quantity: 0 });
          } }
        >
          x
        </button>
      </section>
    );
  }
}

CartProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProduct: PropTypes.func.isRequired,
  decrementProduct: PropTypes.func.isRequired,
  removeAllProduct: PropTypes.func.isRequired,
};

export default CartProduct;
