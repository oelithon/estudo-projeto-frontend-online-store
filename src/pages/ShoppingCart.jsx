import React, { Component } from 'react';
import CartProduct from '../components/CartProduct';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      productOnCart: false,
    };
  }

  componentDidMount() {
    this.getProductLocalStorage();
  }

  getProductLocalStorage = () => {
    const productLocalStorage = JSON.parse(localStorage.getItem('item-list'));
    if (productLocalStorage !== null) {
      this.setState({
        productOnCart: true,
      });
    }
    this.setState({
      products: productLocalStorage,
    });
  }

  addProduct = (product) => {
    const productLocalStorage = JSON.parse(localStorage.getItem('item-list'));
    localStorage.setItem('item-list', JSON.stringify([...productLocalStorage, product]));
  }

  decrementProduct = (product) => {
    const productLocalStorage = JSON.parse(localStorage.getItem('item-list'));
    const index = productLocalStorage
      .findIndex((nowProduct) => nowProduct.id === product.id);
    productLocalStorage.splice(index, 1);
    localStorage.setItem('item-list', JSON.stringify([...productLocalStorage]));
  }

  removeAllProduct = (product) => {
    const productLocalStorage = JSON.parse(localStorage.getItem('item-list'));
    const filteredProducts = productLocalStorage
      .filter((nowProduct) => nowProduct.id !== product.id);
    localStorage.setItem('item-list', JSON.stringify([...filteredProducts]));
  }

  filterProducts = () => {
    const { products } = this.state;
    const filtered = products.reduce((acc, product) => {
      const containsInAcc = acc.some((item) => item.id === product.id);
      if (!containsInAcc) {
        acc = [...acc, product];
        return acc;
      }
      return acc;
    }, []);
    return filtered;
  }

  render() {
    const { products, productOnCart } = this.state;
    return (
      <section>
        <h1>Carrinho de Compras</h1>
        {productOnCart
          ? (
            this.filterProducts().map((product) => (
              <CartProduct
                key={ product.id }
                product={ product }
                cartProducts={ products }
                addProduct={ () => this.addProduct(product) }
                decrementProduct={ () => this.decrementProduct(product) }
                removeAllProduct={ () => this.removeAllProduct(product) }
              />
            ))
          )
          : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          )}
        {productOnCart
          ? (
            <p>
              Total:
              {' '}
              {products.reduce((acc, product) => {
                acc = product.price + acc;
                return acc;
              }, 0)}
            </p>
          )
          : ''}
        <button type="button">Finalzar compra</button>
      </section>
    );
  }
}

export default ShoppingCart;
