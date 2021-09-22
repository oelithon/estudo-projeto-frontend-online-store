import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <form>
        <p>Avaliação</p>
        <label htmlFor="UmaEstrela">
          1
          <input type="radio" name="pontuação" value="1" />
        </label>

        <label htmlFor="UmaEstrela">
          2
          <input type="radio" name="pontuação" value="2" />
        </label>

        <label htmlFor="UmaEstrela">
          3
          <input type="radio" name="pontuação" value="3" />
        </label>

        <label htmlFor="UmaEstrela">
          4
          <input type="radio" name="pontuação" value="4" />
        </label>

        <label htmlFor="UmaEstrela">
          5
          <input type="radio" name="pontuação" value="5" />
        </label>
        <label htmlFor="email">
          <br />
          <input type="email" placeholder="Email" />
        </label>
        <label htmlFor="email">
          <br />
          <textarea
            cols="50"
            rows="10"
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
          />
        </label>

      </form>
    );
  }
}

export default Rating;
