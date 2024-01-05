import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './state/store';
import { Provider } from "react-redux"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>
);
