import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './info.scss';
import { Button } from '@mui/material';
import AddToCart from './AddToCart';
import { setTalle, setProduct } from "../../../redux/actions/cart.actions";


const ProductInfo = ({product}) =>  {

    const dispatch = useDispatch();
    const { talle } = useSelector(state => state.cart.cartProduct)

    function onClick (e) {
        e.preventDefault();
        dispatch(setProduct(product))
        dispatch(setTalle(e.target.value))
    }
    
    return (
        product 
            ?
            <div className='info_container'>
                <div>
                    <h1 className='info_name'>{product.name}</h1>
                    <h2 className='info_description'>{product.description}</h2> 

                    <div className='info_data'>
                        <h2 className='info_price'>$ {product.price}</h2>
                        <div className='info_talles'>
                            {
                                product.talle ?
                                    product.talle.map(t => {
                                        return (
                                            <Button 
                                                value={t} 
                                                onClick={onClick}  
                                                variant={talle===t ? 'outlined' : 'text' } 
                                                style={{'color' : '#000000'}} 
                                                className='info_button' 
                                            >
                                                {t}
                                            </Button>
                                        )
                                    }) : null   
                        }
                        </div>
                    </div>
                    <div className='info__cart'>
                    <AddToCart />
                    </div>
                </div>
            </div>
            :
            "Loading..."
    )
}


export default ProductInfo;