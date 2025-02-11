import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store'; 

import reportWebVitals from './reportWebVitals';

// Create a root for concurrent rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app within the root
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
