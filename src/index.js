import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter as Route } from 'react-router-dom';

import "../src/style.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route>
    <App/>
    </Route>
  </React.StrictMode>
);