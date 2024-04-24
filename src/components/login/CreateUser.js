import React from "react";

const CreateUser = () => {

    return(

        <view>
            <label 
                className="col-md-6"
                htmlFor="name">
                Name
            </label>
            <input 
                type="text" 
                className="from-control mt-2" 
                placeholder="Name">

            </input>
        </view>
    )

}

export default CreateUser;