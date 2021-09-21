import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import shoppingCartIcon from '../images/shoppingCartIcon.png';
import ProductCatalog from '../components/ProductCatalog';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      productCatalog: [],
      getCategoryAPI: [],
      requestAPI: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  componentDidMount() {
    this.getProductCategoryAPI();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  getProductCategoryAPI = async () => {
    const getAPI = await getCategories();
    this.setState({
      getCategoryAPI: getAPI,
      requestAPI: true,
    });
  }

  async searchProducts() {
    const { searchText } = this.state;
    const result = await getProductsFromCategoryAndQuery('', searchText);
    this.setState({
      productCatalog: result.results,
    });
    return result;
  }

  render() {
    const { getCategoryAPI, requestAPI, productCatalog, searchText } = this.state;
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
