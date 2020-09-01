import React from 'react';
import './Css-Import/AppCSS.css';
import Title from './Css-Import/Title.js';

const AppCSS = () => {
  return (
    <div className="container">
      <h1>Texto</h1>
      <Title />
    </div>
  );
};

export default AppCSS;
