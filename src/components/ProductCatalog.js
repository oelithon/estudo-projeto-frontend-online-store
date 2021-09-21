import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './Card';

class ProductCatalog extends React.Component {
  render() {
    const { productCatalog } = this.props;
    return (
      productCatalog.map(({ title, thumbnail, price, id }) => (
        <Link
          data-testid="product-detail-link"
          key={ id }
          to={ `/products/${id}/${title}` }
        >
          <Card
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
          />
        </Link>
      ))
    );
  }
}

ProductCatalog.propTypes = {
  productCatalog: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCatalog;
