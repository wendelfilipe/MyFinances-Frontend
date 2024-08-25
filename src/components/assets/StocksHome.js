import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const StocksHome = () => {
    let [ userStocks, setUserStocks ] = useState([]);
    let [ userAssetsStocks, setUserAssetsStocks ] = useState([]);
    let [ totalAssets, setTotalAssets ] = useState([]);

    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(cookie => cookie.trim());
        cookies[name] = value;
        return cookies;
    }, {});

    const walletIdString = cookies.WalletIdCookie;
    const walletId = parseInt(walletIdString, 10);

    useEffect(() => {
        const fetchData = async () => {

            await getStocks();

            await getAssets();
        };
        fetchData();
    }, []);

    async function getStocks(){
        const response = await api.get(`stocks/GetAllStocksByWalletIdAsync/${walletId}`)
        let stocks = response.data
        userStocks = stocks.stockAssets
        userAssetsStocks = stocks.userAssetsStock
        setUserStocks(userStocks)
        setUserAssetsStocks(userAssetsStocks)
        debugger
    }

    async function getAssets(){
        totalAssets = await api.get(`assets/GetTotalAssetByWalletIdAsync/${walletId}`)
        setTotalAssets(totalAssets.data)
        debugger
    }


    return(
        <div>
            <div className="card">
                <div className="card-header">
                    Ações
                </div>
                <div className="card-body">
                    { userAssetsStocks.length > 0
                        ?   <AssetsHomeForm 
                                setUserAssetsToForm={userStocks}
                                setAllUserAssetsToForm={userAssetsStocks}
                                setTotalAssetsToForm={totalAssets}
                            />
                        :   <div>
                                Adicione Ações
                            </div>
                    }
                </div>
            </div>
            <div>
                <a className="text-decoration-none btn btn-outline-success" href="/createassets">Adicionar Ação</a>
                <a className="text-decoration-none btn btn-outline-success" href="/homepage">Voltar</a>
            </div>
        </div>
    )

}

export default StocksHome;