import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ProductCatalog extends React.Component {
  render() {
    const { productCatalog } = this.props;
    return (
      <div>
        {productCatalog.map(({ title, thumbnail, price, id }) => (<Card
          key={ id }
          id={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
        />))}
      </div>
    );
  }
}

ProductCatalog.propTypes = {
  productCatalog: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCatalog;
