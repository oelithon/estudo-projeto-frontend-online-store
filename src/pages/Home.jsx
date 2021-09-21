import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shoppingCartIcon from '../images/shoppingCartIcon.png';
import ProductCatalog from '../components/ProductCatalog';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      productCatalog: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  /**
 * Consultei o repositório do Grupo 29 para resolver essa parte do SearchProducts().
 * https://github.com/tryber/sd-014-b-project-frontend-online-store/pull/157
 */
  async searchProducts() {
    const { searchText } = this.state;
    const result = await getProductsFromCategoryAndQuery('', searchText);
    this.setState({
      productCatalog: result.results,
    });
    return result;
  }

  render() {
    const { productCatalog, searchText } = this.state;

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
        <input
          type="text"
          data-testid="query-input"
          name="searchText"
          value={ searchText }
          onChange={ this.handleChange }
        />
        <ProductCatalog productCatalog={ productCatalog } />
        <button type="button" data-testid="query-button" onClick={ this.searchProducts }>
          Pesquisa
        </button>
      </section>
    );
  }
}

export default Home;
