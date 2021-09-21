import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  selectedProduct = () => {
    const { title, thumbnail, price, id } = this.props;
    const item = {
      id,
      title,
      thumbnail,
      price,
    };
    const productLocalStorage = JSON.parse(localStorage.getItem('item-list'));
    console.log(productLocalStorage);
    if (productLocalStorage) {
      localStorage.setItem('item-list', JSON.stringify([...productLocalStorage, item]));
    } else {
      localStorage.setItem('item-list', JSON.stringify([item]));
    }
  }

  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <section data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.selectedProduct }
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
