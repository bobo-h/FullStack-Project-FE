import React from 'react';
import ReactDOM from 'react-dom/client';  // 여기서 변경
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './features/store'; 
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
