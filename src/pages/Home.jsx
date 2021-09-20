import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import shoppingCartIcon from '../images/shoppingCartIcon.png';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      getCategoryAPI: [],
      requestAPI: false,
    };
  }

  componentDidMount() {
    this.getProductCategoryAPI();
  }

  getProductCategoryAPI = async () => {
    const getAPI = await getCategories();
    this.setState({
      getCategoryAPI: getAPI,
      requestAPI: true,
    });
  }

  render() {
    const { getCategoryAPI, requestAPI } = this.state;
    return (
      <section>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {requestAPI
          ? (
            <ul>
              {getCategoryAPI.map((category) => (
                <li key={ category.id } data-testid="category">{ category.name }</li>))}
            </ul>)
          : ''}
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
