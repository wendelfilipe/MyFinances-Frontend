import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const InterAssetsHome = () => {
    let [ interAssets, setInterAssets ] = useState([]);
    let [ perCent, setPerCent ] = useState(() => {
        const hasPerCent = localStorage.getItem("perCent");
        return hasPerCent !== null ? parseInt(hasPerCent) : 0;
    });

    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(cookie => cookie.trim());
        cookies[name] = value;
        return cookies;
    }, {});

    const walletIdString = cookies.WalletIdCookie;
    const walletId = parseInt(walletIdString, 10);

    useEffect(() => {
        const fetchData = async () => {

            await getInterAssets();
            await getPerCent();
        };
        fetchData();
    }, []);

    async function getInterAssets(){
        interAssets = await api.get(`internationalAssets/GetAllInterAssetsByWalletIdAsync/${walletId}`)
        setInterAssets(interAssets.data)
    }

    async function getPerCent(){
        const reponse = await api.get(`stocks/GetPerCentStocksByWalletId/${walletId}`)
        perCent = reponse.data;
        setPerCent(perCent)
    }

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    Ativos Internacionais
                </div>
                <div className="card-body">
                { interAssets.length > 0
                        ?   <AssetsHomeForm 
                                setToForm={interAssets}
                                setPerCent={perCent}
                            />
                        :   <div>
                                Adicione Ações
                            </div>
                    }
                </div>
            </div>
            <a className="text-decoration-none btn btn-outline-success" href="/createassets">Adicionar Ação</a>
        </div>
    )

}

export default InterAssetsHome;