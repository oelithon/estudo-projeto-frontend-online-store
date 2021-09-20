import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <section>
        <h1>Carrinho de Compras</h1>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      </section>
    );
  }
}

export default ShoppingCart;
