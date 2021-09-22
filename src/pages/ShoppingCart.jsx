import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      productOnCart: false,
    };
  }

  componentDidMount() {
    this.getProductLocalStorage();
  }

  getProductLocalStorage = () => {
    const productLocalStorage = JSON.parse(localStorage.getItem('item-list'));
    if (productLocalStorage !== null) {
      this.setState({
        productOnCart: true,
      });
    }
    this.setState({
      products: productLocalStorage,
    });
  }

  render() {
    const { products, productOnCart } = this.state;
    return (
      <section>
        <h1>Carrinho de Compras</h1>
        {productOnCart
          ? (
            products.map((product) => (
              <section key={ product.id }>
                <p data-testid="shopping-cart-product-name">{ product.title }</p>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{ product.price }</p>
                <p data-testid="shopping-cart-product-quantity">Quantidade: 1</p>
              </section>
            ))
          )
          : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          )}
      </section>
    );
  }
}

export default ShoppingCart;
