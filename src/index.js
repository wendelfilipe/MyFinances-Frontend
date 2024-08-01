import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './components/router/Router';
import NavBarForm from './components/forms/navBar/NavBarForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index/style.css'

const Index = () => {

  return (
      <BrowserRouter>
      <div className='container-route'>
        <RouterComponent />
      </div>
        <NavBarForm />       
      </BrowserRouter>
  );
};

ReactDom.createRoot(document.getElementById('root')).render(
  <Index />
);