import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const InterAssetsHome = () => {
    let [ userAssetsInterAssets, setUserAssetsInterAssets ] = useState([]);
    let [ InterAssets, setInterAssets ] = useState([]);
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

            await getInterAssets();

            await getAssets();
        };
        fetchData();
    }, []);

    async function getInterAssets(){
        const response = await api.get(`internacionalAssets/GetAllInterAssetsByWalletIdAsync/${walletId}`)
        let interAssetsData = response.data
        InterAssets = interAssetsData.interAssets
        userAssetsInterAssets = interAssetsData.userInterAssets
        setInterAssets(InterAssets)
        setUserAssetsInterAssets(userAssetsInterAssets)
    }

    async function getAssets(){
        totalAssets = await api.get(`assets/GetTotalAssetByWalletIdAsync/${walletId}`)
        setTotalAssets(totalAssets.data)
    }

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    Ativos Internacionais
                </div>
                <div className="card-body">
                { userAssetsInterAssets.length > 0
                        ?   <AssetsHomeForm 
                                setUserAssetsToForm={InterAssets}
                                setAllUserAssetsToForm={userAssetsInterAssets}
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

export default InterAssetsHome;