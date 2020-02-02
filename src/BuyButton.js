// src/BuyButton.js

import React from 'react';

function BuyButton(props) {
  const { children, onBuy, ...restProps } = props;

  function handleClick() {
    console.log('clicked inside button');
    onBuy(); // onBuy prop is assigned a callback function.
  }

  return (
    <button id="btn" {...restProps} className="add-cart-button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default BuyButton;
