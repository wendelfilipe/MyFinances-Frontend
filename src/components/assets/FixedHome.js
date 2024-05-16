import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const FixedHome = () => {
    let [ userAssetsFixed, setUserAssetsFixed ] = useState([]);
    let [ userFixed, setUserFixed ] = useState([]);
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

            await getFixed();

            await getAssets();
        };
        fetchData();
    }, []);

    async function getFixed(){
        const response = await api.get(`fixed/GetAllFixedByWalletIdAsync/${walletId}`)
        let fixed = response.data
        userFixed = fixed.assetsFixed
        userAssetsFixed = fixed.userAssetsFixed
        setUserFixed(userFixed)
        setUserAssetsFixed(userAssetsFixed)
        debugger
    }

    async function getAssets(){
        totalAssets = await api.get(`assets/GetTotalAssetByWalletIdAsync/${walletId}`)
        setTotalAssets(totalAssets.data)
    }

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    Renda Fixa
                </div>
                <div className="card-body">
                { userAssetsFixed.length > 0
                        ?   <AssetsHomeForm 
                                setUserAssetsToForm={userFixed}
                                setAllUserAssetsToForm={userAssetsFixed}
                                setTotalAssetsToForm={totalAssets}
                            />
                        :   <div>
                                Adicione Ações
                            </div>
                    }
                </div>
            </div>
            <div>
                <a className="text-decoration-none btn btn-outline-success" href="/createfixed">Adicionar Ação</a>
                <a className="text-decoration-none btn btn-outline-success" href="/homepage">Voltar</a>
            </div>
        </div>
    )

}

export default FixedHome;