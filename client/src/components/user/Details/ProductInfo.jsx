import {React, useEffect, useState} from "react";


const ProductInfo = ({name, price, description, brand}) => {

    return (
    <div>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <h2>{price}</h2>
            </div>
            <div>
                <h2>{description}</h2>
            </div>
            <div>
                <h2>{brand}</h2>
            </div>
    </div>
    )
}


export default ProductInfo;