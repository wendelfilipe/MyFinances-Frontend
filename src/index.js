import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './components/router/Router';

const Index = () => {
  return (
  <div className="Container">
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  </div>
  );
};

ReactDom.createRoot(document.getElementById('root')).render(
  <div className='Container'>
      <Index />
  </div>
);
reportWebVitals();