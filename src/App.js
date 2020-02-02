// src/App.js

import React from 'react';

import BuyButton from './BuyButton.js';

const products = [{ id: 'abc', name: 'T-Shirt' }, { id: 'xyz', name: 'Jeans' }];

function App() {
  return (
    <ul>
      {
        products.map(product => (
          <li key={product.id}>
            <p>{product.name}</p>
            <BuyButton
              id="custom-button"
              className="class-not-applied"
              onBuy={() => alert(product.name)}
              data-action="Buy"
              onClick={() => console.log('I am never called')}
            >
              Buy {product.name}
            </BuyButton>
          </li>
        ))
      }
    </ul>
  );
}

export default App;
