import React, { createElement } from 'react';
// import { value } from './Main'; // named
import * as obj from './Main'; // alias

import Main, { value } from './Main'; // mixed

console.log(obj.value);
console.log(value);

function App(props) {
  const text = [
    createElement('h1', null, `Привет, ${"мир!"}`), // js
    <h1>Привет, мир!</h1> // jsx
  ];
  
  const name = "main qwe";

  return (
    <p id="par" title="main paragraph" className={name} tabIndex="2">
      <span></span>
      <span></span>
      {text}
    </p>
  );
}

export default App;
// module.exports = App;
