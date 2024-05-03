import React, { useState } from "react";
import api from "../../../api/Api";
import CreateAssets from "../../assets/CreateAssets";

const AssetsForm = (props) =>{
    const [ buyPrice, setBuyPrice ] = useState(0)

    
    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(cookie => cookie.trim());
        cookies[name] = value;
        return cookies;
    }, {});
        
    

    async function postCreateAssets(){

        const walletIdIdString = cookies.WalletIdCookie;
        const walletId = parseInt(walletIdIdString, 10);

        
        const asset = {
            "codname": props.codName,
            "currentprice": props.currentPrice,
            "walletid": walletId
        }

        await api.post("assets/PostCreateAssetAsync", asset)



    }

    return (

        <form>
            <div className="mb-3">
                <label for="currentPrice" className="form-label">Preço atual</label>
                <input type="number" className="form-control" value={props.currentPrice} id="currentPrice" placeholder="Preço atual"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Preço pago</label>
                <input type="number" value={buyPrice} onChange={(e) => e.target.value} className="form-control" id="buyPrice" placeholder="Preço pago"/>
            </div>
            <button className="btn btn-primary me-2" onClick={postCreateAssets}>Adicionar</button>
            <a className="btn btn-primary" href="/createassets">Cancelar</a>
        </form>

    )
}

export default AssetsForm;