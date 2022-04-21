import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// jsx
root.render(
  <React.StrictMode>
    <App />
    {/* new App() */}
  </React.StrictMode>
);
