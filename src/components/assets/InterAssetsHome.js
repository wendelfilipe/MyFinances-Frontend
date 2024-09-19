import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const InterAssetsHome = () => {
    let [ userAssetsInterAssets, setUserAssetsInterAssets ] = useState([]);
    let [ interAssets, setInterAssets ] = useState([]);
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

            await getInterAssets();

            await getAssets();
        };
        fetchData();
    }, []);

    async function getInterAssets(){
        // const response = await api.get(`internacionalAssets/GetAllInterAssetsByWalletIdAsync/${walletId}`)
        // let interAssetsData = response.data
        // InterAssets = interAssetsData.interAssets
        // userAssetsInterAssets = interAssetsData.userInterAssets
        // setInterAssets(InterAssets)
        // setUserAssetsInterAssets(userAssetsInterAssets)
        try {
            const response = await fetch(`http://localhost:5001/api/internacionalAssets/GetAllInterAssetsByWalletIdAsync/${walletId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
    
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
    
            const inter = await response.json();  // Converte o corpo da resposta para JSON
            interAssets = inter.interAssets;     // Obtém os international do usuário
            userAssetsInterAssets = inter.userInterAssets; // Obtém os assets international do usuário
    
            setInterAssets(interAssets);                // Atualiza o estado com os international
            setUserAssetsInterAssets(userAssetsInterAssets);    // Atualiza o estado com os assets international
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
            console.error('Erro ao buscar Ativos Internacionais:', error);
        }
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
                                setUserAssetsToForm={interAssets}
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