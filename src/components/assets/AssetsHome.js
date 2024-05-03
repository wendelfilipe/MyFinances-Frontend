import React from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";

const AssetsHome = () => {

    // async function getAssets(){
    //     assets = await api.get(`assets/GetAllAssetsDTOAsync/${walletId}`)
    // }

    return(
        <div>
            <div class="card">
                <div class="card-header">
                    Açoes
                </div>
                <div class="card-body">
                    <AssetsHomeForm />

                </div>
            </div>
        </div>
    )

}

export default AssetsHome;