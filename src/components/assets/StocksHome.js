import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const StocksHome = () => {
    let [ userStocks, setUserStocks ] = useState([]);
    let [ userAssetsStocks, setUserAssetsStocks ] = useState([]);
    let [ totalAssets, setTotalAssets ] = useState([]);
    let token = localStorage.getItem('authToken')

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

        try {
            const response = await fetch(`http://localhost:5001/api/stocks/GetAllStocksByWalletIdAsync/${walletId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
    
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
    
            const stocks = await response.json();  // Converte o corpo da resposta para JSON
            userStocks = stocks.stockAssets;     // Obtém os stocks do usuário
            userAssetsStocks = stocks.userAssetsStock; // Obtém os assets stocks do usuário
            setUserStocks(userStocks);                // Atualiza o estado com os stocks
            setUserAssetsStocks(userAssetsStocks);    // Atualiza o estado com os assets stocks
        } catch (error) {
            console.error('Erro ao buscar Stocks:', error);
        }
    }

    async function getAssets(){
        try {
            const response = await fetch(`http://localhost:5001/api/assets/GetTotalAssetByWalletIdAsync/${walletId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
    
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
    
            const assets = await response.json();  // Converte o corpo da resposta para JSON
            setTotalAssets(assets)

        } catch (error) {
            console.error('Erro ao buscar Stocks:', error);
        }
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