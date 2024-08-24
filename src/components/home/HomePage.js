import React, { useEffect, useState } from "react";
import api from "../../api/Api";
import NavBarForm from "../forms/navBar/NavBarForm";
import WalletForm from "../forms/wallet/WalletForm";
import { Col, Container, Row } from "react-bootstrap";
import CreateAssets from "../assets/CreateAssets";

const HomePage = () => {
    let [wallets, setWallets ] = useState([]);
    let [patrimonyString, setPatrimonyString ] = useState("");
    const [showChild, setShowChild] = useState(false);
    const urlStocks = "stocks/GetPerCentStocksByWalletId/"
    const urlFiis = "fiis/GetPerCentFiisByWalletId/"
    const urlInterAssets = "internacionalAssets/GetPerCentInternacionalAssetsByWalletId/"
    const urlFixed = "fixed/GetPerCentFixedsByWalletId/"
    let [isClicked, setIsClicked] = useState(() => {
        let isClicked = localStorage.getItem("isClicked");
        return isClicked ? isClicked : false;
    })

    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(cookie => cookie.trim());
        cookies[name] = value;
        return cookies;
    }, {});
   
    const userIdString = cookies.UserIdCookie;
    const userId = userIdString;
    const walletIdString = cookies.WalletIdCookie;
    const walletId = parseInt(walletIdString, 10);
    debugger

    
    useEffect (() => {
        const fetchData = async () => {

            await getWallets();

            if(walletId > 0)
                await getAssets();

        }
       fetchData();
     }, []);


    async function getWallets(){
        wallets = await api.get(`wallet/GetAllWalletDTOByUserIDAsync/${userId}`)
        setWallets(wallets.data)
        debugger
    }

    async function getAssets(){
        let patrimony = await api.get(`assets/GetPatrimonyAsync/${walletId}`);
        patrimonyString = patrimony.data.toFixed(2);
        setPatrimonyString(patrimonyString);
    }

    function isClickedFixed(){
        isClicked = true;
        setIsClicked(isClicked)    
    }

    if(wallets.length === 0){

        return (
            <div className="container">
                <div className=""><h5>Você não tem uma carteira</h5></div>
                <div>
                    <a className="btn btn-outline-success" href="/createwallet">Criar Carteira</a>
                </div>
            </div>
        )
    }
    else{

        let dataDeExpiracao = new Date();
        let walletId = wallets[0].id;
        let walletName = wallets[0].name;
        dataDeExpiracao.setHours(dataDeExpiracao.getHours() + 24);
        document.cookie = `WalletIdCookie=${walletId};expires=${dataDeExpiracao}`;

        return (
            <>
                
                <div className="container-wallet">
                    <div className="d-flex justify-content-center">
                        <h2>Carteiras</h2>
                    </div>
                    <div className="card text-decoration-none" style={{ width: "100%" }}>
                        <h5 className="card-header d-flex justify-content-between align-items-center">
                            {walletName}
                            <span className="text-end">
                                Patrimônio: R$ {patrimonyString}   
                            </span>
                        </h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                <a className="text-decoration-none" href="/stockshome">
                                    <WalletForm 
                                        nameAssets={"Ações"}
                                        urlName={urlStocks}
                                    />
                                </a>
                                </div>
                                <div className="col-md-6">
                                <a className="text-decoration-none" href="/fiishome">
                                    <WalletForm 
                                        nameAssets={"Fundos imobiliários"}
                                        urlName={urlFiis}
                                    />
                                </a>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                <a className="text-decoration-none" href="/fixedhome" onClick={isClickedFixed}>
                                    <WalletForm 
                                        nameAssets={"Renda Fixa"}
                                        urlName={urlFixed}
                                    />
                                </a>
                                </div>
                                <div className="col-md-6">
                                <a className="text-decoration-none" href="/interassetshome">
                                    <WalletForm 
                                        nameAssets={"Ativos Internacionais"}
                                        urlName={urlInterAssets}
                                    />
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HomePage;