import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './components/router/Router';
import NavBarForm from './components/forms/navBar/NavBarForm';

import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {

  return (
      <BrowserRouter>
        <div className="container">
          <RouterComponent />
        </div>                                             
      </BrowserRouter>
  );
};

ReactDom.createRoot(document.getElementById('root')).render(
<div className="container">
      <div className="row">
        <div className="col">
          <BrowserRouter>
            <NavBarForm />
          </BrowserRouter>
        </div>
      </div>
      <div className="container" style={{width: 25, height:25}}></div>
      <div className="row mt-5">
        <div className="col">
          <Index />
        </div>
      </div>
    </div>
);