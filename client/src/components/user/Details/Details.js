import React, {useEffect} from "react";
import {useState}  from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getProductsDetails } from "../../../redux/actions/products.actions";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import {useParams } from "react-router-dom"

const Details= () => {
    const dispatch = useDispatch();
    const {product} = useSelector((state) => state.products)
     const { id } = useParams();

     useEffect(() => {
          dispatch(getProductsDetails(id))
      }, [dispatch, id])


    return (
        
      
        <div>

        
        <ProductInfo />
        <ProductImage
           image={product.image}/>
        </div> 
        
        
    )
}


export default Details;