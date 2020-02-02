// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';

function AddToCartButton() {
  return (
    <button>
      Add To Cart
    </button>
  );
}

const productDescription = <p>This product will change your life</p>;

function App() {
  return (
    <>
      {productDescription}
      <AddToCartButton />
    </>
  );
}

const elemRoot = document.getElementById('root');

ReactDOM.render(<App />, elemRoot);
