import React, { useEffect, useState} from "react";
import {useSelector} from 'react-redux'


const ProductInfo = () =>  {

    const {product} = useSelector((state) => state.products)
    
    return (
    <div>
            <div>
                <h1>{product.name}</h1>
           
     
                <h2>{product.price}</h2>
           
                <h2>{product.description}</h2> 
           
                {/* <h2>{product.brand.name}</h2> */}
            </div>
    </div>
    )
}


export default ProductInfo;