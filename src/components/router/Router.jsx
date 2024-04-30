import React from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import HomePage from '../home/HomePage';
import CreateUserPage from '../login/CreateUserPage';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import WalletHome from '../home/walletHome/WalletHome';
import CreateWallet from '../forms/wallet/CreateWallet';

const RouterComponent = () => {
    const navigate = useNavigate();
    
    async function navigatePage(){
        return navigate;
    }

  return (
    <Routes>
        <Route 
            path="/" 
            element={<LoginPage 
                    navigatePage = {navigatePage}
            />} 
        />
        <Route 
            path="/homepage" 
            element={<HomePage />} 
        />
        <Route
            path='/createuserpage'
            element={<CreateUserPage />}
        />
        <Route 
            path='/wallethome'
            element={<WalletHome />}
        />
        <Route
            path='/createwallet'
            element={<CreateWallet />}
        />
    </Routes>
  );
};

export default RouterComponent;