import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const InterAssetsHome = () => {
    let [ interAssets, setInterAssets ] = useState([]);

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

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    Ativos Internacionais
                </div>
                <div className="card-body">
                    <AssetsHomeForm 
                        setToForm={interAssets}
                    />
                </div>
            </div>
            <a className="text-decoration-none btn btn-outline-success" href="/createassets">Adicionar Ação</a>
        </div>
    )

}

export default InterAssetsHome;