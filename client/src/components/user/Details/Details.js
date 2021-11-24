import {React, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProductInfo from "./ProductInfo";



const DetailContainer= () => {
    const dispatch = useDispatch();
    const {id} = props.match.params
    const detail = useSelector(state => state.product)

     useEffect(() => {
          dispatch(getProductById(id))
      }, [dispatch, id])


    return (

        <div>
           <ProductInfo name={product.name} price={product.price} brand={product.brand}/>
           <ProductImage image={product.image}/>
        </div>
    )
}


export default Details;