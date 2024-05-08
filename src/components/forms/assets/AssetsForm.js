import React, { useState } from "react";
import api from "../../../api/Api";

const AssetsForm = (props) =>{
    const [ buyPrice, setBuyPrice ] = useState(0);
    const [ amount, setAmount ] = useState(0);
    const [ sourceTypeAssets, setSourceTypeAssets ] = useState(0);
    debugger

    
    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(cookie => cookie.trim());
        cookies[name] = value;
        return cookies;
    }, {});
        
    

    async function postCreateAssets(e){
        e.preventDefault();

        const walletIdIdString = cookies.WalletIdCookie;
        const walletId = parseInt(walletIdIdString, 10);

        
        const asset = {
            codname: props.codName,
            currentprice: props.currentPrice,
            buyprice: buyPrice,
            walletid: walletId,
            sourcecreate: 1,
            sourcetypeassets: parseInt(sourceTypeAssets), 
            amount: amount
        }
        debugger
        await api.post("assets/PostCreateAssetAsync", asset)
    }

    return (

        <form>
            <div className="mb-3">
                <label htmlFor="currentPrice" className="form-label">Preço atual</label>
                <input type="number" className="form-control" readOnly value={props.currentPrice} id="currentPrice" placeholder="Preço atual"/>
            </div>
            <div className="mb-3">
                <label htmlFor="buyPrice" className="form-label">Preço pago</label>
                <input type="number" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} className="form-control" id="buyPrice" placeholder="Preço pago"/>
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Quantidade</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control" id="buyPrice" placeholder="Quantidade"/>
            </div>
            <div className="mb-3">
                <select className="form-select" aria-label="Default select example" value={sourceTypeAssets} onChange={(e) => setSourceTypeAssets(e.target.value)}>
                    <option selected>Selecione um tipo</option>
                    <option value="1">Acões</option>
                    <option value="4">Fundos Imobiliários</option>
                    <option value="3">Ativos Internacionais</option>
                    <option value="2">Renda Fixa</option>
                </select>
            </div>
            <button className="btn btn-primary me-2" onClick={postCreateAssets}>Adicionar</button>
            <a className="btn btn-primary" href="/createassets">Cancelar</a>
        </form>

    )
}

export default AssetsForm;