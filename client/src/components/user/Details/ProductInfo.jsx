import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './info.scss';
import { Button } from '@mui/material';
import AddToCart from './AddToCart';
import { setTalle, setProduct } from "../../../redux/actions/cart.actions";


const ProductInfo = ({ product }) => {

    const dispatch = useDispatch();
    const { talle } = useSelector(state => state.cart.cartProduct)
    console.log('review', product.reviews);
    function onClick(e) {
        e.preventDefault();
        dispatch(setProduct(product))
        dispatch(setTalle(e.target.value))
    }

    return (
        product
            ?
            <div className='info_container'>
                <div className='ctn_details'>
                    <h1 className='info_name'>{product.name}</h1>
                    <h2 className='info_price'>$ {product.price}</h2>
                    <h2 className='info_description'>{product.description}</h2>
                    {
                        product.reviews.map(r => (
                            <div>
                                <h3 className='info_review_rating'>{r.rating}</h3>
                                <p className='info_review_comment'>{r.comment}</p>
                                <p className='info_review_user'>{r.user.email}</p>
                            </div>
                        ))
                    }
                </div>

                <div className='info_talles'>
                    {
                        product.talle ?
                            product.talle.map(t => {
                                return (
                                    <Button
                                        value={t}
                                        onClick={onClick}
                                        variant={talle === t ? 'outlined' : 'text'}
                                        style={{ 'color': '#000000' }}
                                    >
                                        {t}
                                    </Button>
                                )
                            }) : null
                    }
                </div>

                <div className='info__cart'>
                    <AddToCart />
                </div>

            </div >
            :
            "Loading..."
    )
}


export default ProductInfo;