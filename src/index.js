import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './components/router/Router';

const Index = () => {
  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>

  );
};

ReactDom.createRoot(document.getElementById('root')).render(
      <Index />
);