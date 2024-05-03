import React from "react";
import { useState } from "react";

const WalletForm = (props) => {
    const name = "Wallet";
    const  [ process, setProcess ]  = useState(25);

    function walletIdCookie(){

    
    }


    return(

        <div className="container">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card w-100">
                    <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                    <a className="text-decoration-none" href="/createassets" onClick={walletIdCookie}>
                        <i className="fa-solid fa-wallet"></i>
                        <p className="card-text ms-2 ts-sm d-inline-block me-1">{name}</p>
                    </a>
                    </div>
                    <div className="progress-stacked">
                        <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width: `${process}%`}}>
                            <div className="progress-bar">
                                {process + "%"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WalletForm;