import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const StocksHome = () => {
    let [ stocks, setStocks ] = useState([]);
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
        stocks = await api.get(`stocks/GetAllStocksByWalletIdAsync/${walletId}`)
        setStocks(stocks.data)
    }

    async function getAssets(){
        totalAssets = await api.get(`assets/GetTotalAssetByWalletIdAsync/${walletId}`)
        setTotalAssets(totalAssets.data)
    }


    return(
        <div>
            <div className="card">
                <div className="card-header">
                    Ações
                </div>
                <div className="card-body">
                    { stocks.length > 0
                        ?   <AssetsHomeForm 
                                setToForm={stocks}
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