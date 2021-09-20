import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shoppingCartIcon from '../images/shoppingCartIcon.png';

class Home extends Component {
  render() {
    return (
      <section>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <img
            className="shopping-cart-img"
            src={ shoppingCartIcon }
            alt="shoppingCartIcon"
          />
        </Link>
      </section>
    );
  }
}

export default Home;
