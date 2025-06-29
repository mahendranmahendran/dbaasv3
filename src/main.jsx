// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import './index.css';

// For development convenience - uncomment to auto-login during development
// if (import.meta.env.DEV) {
//   localStorage.setItem('isAuthenticated', 'true');
//   console.log("DEV MODE: Auto-login enabled");
// }
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);