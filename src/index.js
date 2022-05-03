import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/custom.scss';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container"><div className="row"><div className="col-md-6 offset-md-3"><div className="container mt-4"><header><h1>WPP Site Visit</h1></header></div></div></div></div>
    <App />
  </React.StrictMode>
);