// src/App.js

import React from 'react';

import './style.css';

const images = ['MTkwODU2NA', 'v104en-YP', '7Q76qhEAF', 'jLtSJss72', 'Z6mrcccZv'];

function Carousel() {
  return (
    <ul className="image-list">
      {
        images.map(image => {
          const url = `https://cdn2.thecatapi.com/images/${image}.jpg`;
          return (
            <li key={image} className="image-item">
              <img src={url} alt="Cat picture" width="800" height="600" />
            </li>
          );
        })
      }
    </ul>
  );
}

function App() {
  return (
    <div>
      <Carousel />
    </div>
  );
}

export default App;
