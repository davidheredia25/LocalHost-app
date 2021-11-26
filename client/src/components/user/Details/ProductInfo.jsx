import {React, useEffect, useState} from "react";


const ProductInfo = (props) =>  {

    return (
    <div>
            <div>
                <h1>{props.name}</h1>
            </div>
            <div>
                <h2>{props.price}</h2>
            </div>
            <div>
                <h2>{props.description}</h2>
            </div>
            <div>
                <h2>{props.brand}</h2>
            </div>
    </div>
    )
}


export default ProductInfo;