import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Rating from '../components/Rating';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchDetailsProduct();
  }

  fetchDetailsProduct = async () => {
    const { match: { params: { name, id } } } = this.props;
    const data = await getProductsFromCategoryAndQuery('', name);
    const productDetail = data.results.find((product) => product.id === id);
    this.setState({
      product: productDetail,
      loading: false,
    });
  }

  handleClick = () => {
    const { product } = this.state;
    localStorage.setItem('item-list', JSON.stringify([product]));
  }

  render() {
    const { product, loading } = this.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">{ product.title }</h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{ product.price }</p>
        {loading
          ? ''
          : (
            <ul key={ product.id }>
              { product.attributes.map((attribute, index) => (
                <li key={ index }>
                  { `${attribute.name}: ${attribute.value_name}` }
                </li>
              ))}
            </ul>
          )}
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          id={ product.id }
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <button type="button">Carrinho de compras</button>
        </Link>
        <Rating />
      </div>
    );
  }
}

Products.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Products;
