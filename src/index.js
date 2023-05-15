import React from 'react';
import ReactDOM from 'react-dom/client';
import { SignupProvider } from './context/SignupContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignupProvider>
      <App />
    </SignupProvider>
  </React.StrictMode>
);