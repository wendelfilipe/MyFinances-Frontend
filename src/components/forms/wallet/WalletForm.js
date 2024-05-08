import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../../api/Api";

const WalletForm = (props) => {
    let [ perCent, setPerCent ] = useState(() => {
        const hasPerCent = localStorage.getItem("perCent");
        return hasPerCent !== null ? parseInt(hasPerCent) : 0;
    });
    let url = props.urlName
    debugger

    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(cookie => cookie.trim());
        cookies[name] = value;
        return cookies;
    }, {});

    const walletIdString = cookies.WalletIdCookie;
    const walletId = parseInt(walletIdString, 10);

    useEffect(() => {
        const fetchData = async () => {
            await getPerCent();

        };

        fetchData();
    }, []);



    async function getPerCent(){
        debugger
        const reponse = await api.get(`${url}${walletId}`)
        perCent = reponse.data;
        setPerCent(perCent)
    }



    return(

        <div className="container">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card w-100">
                    <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                        <i className="fa-solid fa-wallet"></i>
                        <p className="card-text ms-2 ts-sm d-inline-block me-1">{props.nameAssets}</p>
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