import React, { useEffect, useState } from "react";
import axios from "axios";
import AssetsForm from "../forms/assets/AssetsForm";
import FixedCreateForm from "../forms/assets/FixedCreateForm";

const CreateFixed = () => {


    return (
        <div className="d-flex justify-content-center">
                <div className="mt-3">
                    <FixedCreateForm
                    />
                </div>           
        </div>
    )
}

export default CreateFixed;