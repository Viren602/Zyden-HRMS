import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PrimeReactProvider } from 'primereact/api';
import { IsProdMode } from './utils/AppSetting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PrimeReactProvider>
    {IsProdMode === true ? (
      <App />
    ) : (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )}
  </PrimeReactProvider>
);

reportWebVitals();
