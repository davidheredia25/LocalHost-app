import React, { useEffect, useState} from "react";
import {useSelector} from 'react-redux';
import './info.scss';
import { Button } from '@mui/material';
import AddToCart from './AddToCart';

const ProductInfo = () =>  {

    const {product} = useSelector((state) => state.products)
    
    return (
    <div className='info_container'>
            <div>
                <h1 className='info_name'>{product.name}</h1>
                <h2 className='info_description'>{product.description}</h2> 

            <div className='info_data'>
            <h2 className='info_price'>$ {product.price}</h2>
            <div className='info_talles'>
                {product.talle?
                 product.talle.map(t => {
                     return(
                    <Button variant='text' style={{'color' : '#000000'}} className='info_button' >{t}</Button>
                     )
                }) :null   
            }
            </div>
            </div>
             
                {/* <h2>{product.brand.name}</h2> */}
            </div>
    </div>
    )
}


export default ProductInfo;