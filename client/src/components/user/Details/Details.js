import React, { useEffect } from "react";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetails, removeProduct } from "../../../redux/actions/products.actions";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import { useParams } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import './Details.scss';

const Details = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products)
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductsDetails(id))
    return () => dispatch(removeProduct())
  }, [dispatch, id])

  return (
    product
      ?
      <div>
         <NavBar />
        <div className='details_container'>
          <div className='details_image'>
            <ProductImage
              images={[product.image, product.image1, product.image2]}
              product={product}
            />
          </div>
          <ProductInfo product={product} />
        </div>
      </div>
      :
      "Loading..."
  )
}

export default Details;