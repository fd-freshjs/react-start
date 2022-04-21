import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const text = [
  React.createElement('h1', null, `Привет, ${"мир!"}`), // js
  <h1>Привет, мир!</h1> // jsx
];

const name = "main qwe";

ReactDOM.render(
  <React.StrictMode>
    <p id="par" title="main paragraph" className={name} tabIndex="2">
      <span></span>
      <span></span>
      {text}
    </p>
  </React.StrictMode>,
  document.getElementById('root')
);
