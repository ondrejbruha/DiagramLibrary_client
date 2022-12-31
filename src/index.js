import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RoutesList } from './Routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
      <RoutesList />
    </React.StrictMode>
  );

reportWebVitals();
