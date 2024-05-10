import React from "react";

const AssetsHomeForm = (props) => {
    let assetsEachType = props.setToForm;
    let totalAssets = props.setTotalAssetsToForm;

    return (
        <div>
            {assetsEachType.map(a => (
                <div key={a.id} className="card mb-3">
                <div className="card-header d-flex justify-content-between align-items-center">
                    Código da Ação: {a.codName}
                    <span className="text-end">Total: R$ {(a.amount * a.currentPrice).toFixed(2)}</span>
                </div>
                <div className="card-body">
                    <p className="card-title d-inline-block me-3">Preço atual: R$ {a.currentPrice}</p>
                    <p className="card-title d-inline-block me-3">Preço pago: R$ {a.buyPrice}</p>
                    <p className="card-title d-inline-block me-3">Quantidade: {a.amount}</p>
                    <p className="card-title d-inline-block me-3">Preço medio: R$ {a.averegePrice}</p>
                    <p className="card-title d-inline-block me-3">Porcetagem: {(((a.amount * a.currentPrice)*100)/totalAssets).toFixed(2)}%</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default AssetsHomeForm;