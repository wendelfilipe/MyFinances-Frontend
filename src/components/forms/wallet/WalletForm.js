import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../../api/Api";
import AssetsHome from "../../assets/AssetsHome";

const WalletForm = (props) => {
    let [ process, setProcess ]  = useState(0);
    let [ assetsData, setAssetsData ] = useState([]);
    const [totalAssets, setTotalAssets ] = useState(0)
    debugger
    let [ perCent, setPerCent ] = useState(0);

    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(cookie => cookie.trim());
        cookies[name] = value;
        return cookies;
    }, {});

    const walletIdString = cookies.WalletIdCookie;
    const walletId = parseInt(walletIdString, 10);

    useEffect(() => {
        const fetchData = async () => {
            await getAssets();

            await sumAllAssets();
        };

        fetchData();
    }, []);



    async function getAssets(){
        
        const assets = await api.get(`assets/GetAllAssetsDTOAsync/${walletId}`)
        const assetsData = assets.data;
        setAssetsData(assetsData)
        debugger
    }

    async function sumAllAssets(){
        await Promise.all(
            assetsData.map(a => {
                debugger
                let totalEachAssets = a.amount * a.buyPrice;
                totalAssets += totalEachAssets;
            })
        );
        setTotalAssets(totalAssets);
        setPerCent(totalAssets)
        debugger
    }



    return(

        <div className="container">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card w-100">
                    <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                    <a className="text-decoration-none" href="/assetshome">
                        <i className="fa-solid fa-wallet"></i>
                        <p className="card-text ms-2 ts-sm d-inline-block me-1">{props.nameAssets}</p>
                    </a>
                    </div>
                    <div className="progress-stacked">
                        <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width: `${perCent}%`}}>
                            <div className="progress-bar">
                                {perCent + "%"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WalletForm;