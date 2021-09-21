import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/shoppingcart" component={ ShoppingCart } />
        <Route path="/products/:id/:name" component={ Products } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
