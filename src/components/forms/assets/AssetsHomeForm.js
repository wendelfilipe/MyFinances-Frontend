import React from "react";

const AssetsHomeForm = (props) => {
    let assetsEachType = props.setUserAssetsToForm;
    let userAssetEachType = props.setAllUserAssetsToForm;
    let totalAssets = props.setTotalAssetsToForm;
    return (
        <div>
            {assetsEachType.map(a => {
                const matchedUserAsset = userAssetEachType.find(ua => a.id === ua.assetsId);
                if (matchedUserAsset) {
                    return (
                        <div key={a.id} className="card mb-3">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                Código da Ação: {a.codName}
                                <span className="text-end">Total: R$ {(matchedUserAsset.amount * a.currentPrice).toFixed(2)}</span>
                            </div>
                            <div className="card-body">
                                <p className="card-title d-inline-block me-3">Preço atual: R$ {a.currentPrice}</p>
                                <p className="card-title d-inline-block me-3">Preço pago: R$ {matchedUserAsset.buyPrice}</p>
                                <p className="card-title d-inline-block me-3">Quantidade: {matchedUserAsset.amount}</p>
                                <p className="card-title d-inline-block me-3">Preço medio: R$ {matchedUserAsset.averegePrice}</p>
                                <p className="card-title d-inline-block me-3">Porcetagem: {(((matchedUserAsset.amount * a.currentPrice)*100)/totalAssets).toFixed(2)}%</p>
                            </div>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    )
}

export default AssetsHomeForm;