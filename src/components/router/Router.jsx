import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import HomePage from '../home/HomePage';
import CreateUserPage from '../login/CreateUserPage';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import WalletHome from '../home/walletHome/WalletHome';
import CreateWallet from '../wallet/CreateWallet';
import NavBarForm from '../forms/navBar/NavBarForm';
import CreateAssets from '../assets/CreateAssets';
import CreateFixed from '../assets/CreateFixed';
import AssetsHomeForm from '../forms/assets/AssetsHomeForm';
import StocksHome from '../assets/StocksHome';
import FiisHome from '../assets/FiisHome';
import InterAssetsHome from '../assets/InterAssetsHome';
import FixedHome from '../assets/FixedHome';
import InitialPage from '../home/InitialPage';
import GraphicHomeWeek from '../home/graphics/GraphicHomeWeek';
import GraphicHomeMonth from '../home/graphics/GraphicHomeMonth';


const RouterComponent = (propsRoute) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", "false");
    };

    // Componente de rota protegida
    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
    };

  return (
    <div>
        <Routes>
        <Route
            path='/'
            element={<InitialPage/>}
        />
        <Route 
            path="/loginpage" 
            element={<LoginPage onLogin={handleLogin} />} 
        />
        <Route
            path='/graphicweek'
            element={<GraphicHomeWeek/>}
        />
        <Route 
            path='/graphicmonth'
            element={<GraphicHomeMonth/>}
        />
        <Route
            path='/createuserpage'
            element={<CreateUserPage />}
        />
        <Route
                path="/homepage"
                element={isLoggedIn ? <HomePage /> : <Navigate to="/" />}
            />
        <Route
            path="/wallethome"
            element={isLoggedIn ? <WalletHome /> : <Navigate to="/" />}
        />
        <Route
            path="/createwallet"
            element={isLoggedIn ? <CreateWallet /> : <Navigate to="/" />}
        />
         <Route
            path="/createassets"
            element={isLoggedIn ? <CreateAssets /> : <Navigate to="/" />}
        />
        <Route
            path='/stockshome'
            element={<StocksHome />}
        />
        <Route
            path='/fiishome'
            element={<FiisHome />}
        />
        <Route
            path='/interassetshome'
            element={<InterAssetsHome />}
        />
        <Route
            path='/fixedhome'
            element={<FixedHome />}
        />
        <Route
            path='/assetshomeform'
            element={<AssetsHomeForm />}
        />
        <Route
            path='/createFixed'
            element={<CreateFixed />}
        />
        </Routes>
        <NavBarForm 
            onLogout={handleLogout}    
        />
    </div>
  );
};

export default RouterComponent;