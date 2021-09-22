import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ProductCatalog extends React.Component {
  render() {
    const { productCatalog } = this.props;
    return (
      productCatalog.map(({ title, thumbnail, price, id }) => (
        <Card
          key={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
          id={ id }
        />
      ))
    );
  }
}

ProductCatalog.propTypes = {
  productCatalog: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCatalog;
