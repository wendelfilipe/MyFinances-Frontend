import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const FiisHome = () => {
    let [ userAssetsFiis, setUserAssetsFiis ] = useState([]);
    let [ userFiis, setUserFiis ] = useState([]);
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

            await getFiis();

            await getAssets();
        };
        fetchData();
    }, []);

    async function getFiis(){
        const response = await api.get(`fiis/GetAllFiisByWalletIdAsync/${walletId}`)
        let fiis = response.data
        userFiis = fiis.fiisAssets
        userAssetsFiis = fiis.userFiis
        setUserFiis(userFiis)
        setUserAssetsFiis(userAssetsFiis)
    }

    async function getAssets(){
        totalAssets = await api.get(`assets/GetTotalAssetByWalletIdAsync/${walletId}`)
        setTotalAssets(totalAssets.data)
    }

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    Fundos Imobiliários
                </div>
                <div className="card-body">
                { userAssetsFiis.length > 0
                        ?   <AssetsHomeForm 
                                setUserAssetsToForm={userFiis}
                                setAllUserAssetsToForm={userAssetsFiis}
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

export default FiisHome;