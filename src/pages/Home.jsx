import React, { Component } from 'react';
import { getCategories } from '../services/api';

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
      </section>
    );
  }
}

export default Home;
