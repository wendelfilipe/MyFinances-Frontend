import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const StocksHome = () => {
    let [ stocks, setStocks ] = useState([]);

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
        };
        fetchData();
    }, []);

    async function getStocks(){
        stocks = await api.get(`stocks/GetAllStocksByWalletIdAsync/${walletId}`)
        setStocks(stocks.data)
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