import React, { useEffect, useState } from "react";
import api from "../../api/Api";
import NavBarForm from "../forms/navBar/NavBarForm";
import WalletForm from "../forms/wallet/WalletForm";

const HomePage = () => {
    const [wallets, setWallets ] = useState();



    async function getWallets(){
        const userIdCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('UserIdCookie='));
        let userIdInt;
        debugger
        
        if (userIdCookie) {
            const cookieObj = JSON.parse(userIdCookie.split('=')[1]);
            const userId = cookieObj.userId;
            userIdInt = parseInt(userId);
        } else {
            userIdInt = 0;
        }
        if(userIdInt !== 0)
            wallets = await api.get(`wallet/GetAllWalletDTOByUserIDAsync/${userIdInt}`)
            setWallets(wallets);
    }

    async function showWallets(){
    wallets.map(w => {
        <WalletForm 
            AssetsName = {w.name}
        />
    })
    }

     useEffect (() => {
        getWallets();
     }, []);

    const getPorcent = () => {

        api.get()

    }


    

    return (
        <div className="conteiner">
            <div className="d-flex justify-content-center"><h2>Carteiras</h2></div>
            <div className="card text-decoration-none" style={{ width: "20rem"}}>
            <h5 className="card-header" >walletName</h5>
                <div className="card-body">
                    <div>
                       {showWallets}
                    </div>                        
                </div>
            </div>
            <div>
                <a className="btn btn-outline-success" href="/createwallet">Criar Carteira</a>
            </div>
        </div>
    )
}

export default HomePage;