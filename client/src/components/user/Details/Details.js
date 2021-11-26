import React, {useEffect} from "react";
import {useState}  from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getProductsDetails } from "../../../redux/actions/products.actions";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const Details= (props) => {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products)
    const  {id}  = props.match.params;

     useEffect(() => {
          dispatch(getProductsDetails(id))
      }, [dispatch, id])


    return (
        <div>
           <ProductInfo name={products.name} price={products.price} brand={products.brand}/>
           <ProductImage image={products.image}/>
        </div>
    )
}


export default Details;