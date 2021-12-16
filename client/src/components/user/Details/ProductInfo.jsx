import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import style from './info.module.scss';
import { Button } from '@mui/material';
import { addItemToCart, setCount, addEmptyCart } from '../../../redux/actions/cart.actions.js';



const ProductInfo = ({ product }) => {
    const [num, setNum] = useState(1);
    const [talle, setTalle] = useState('');
    console.log('talle', talle)
    const { user } = useSelector(state => state.login)
    let User;
    if(user?.email) User = user
    else User = user?.user;
    const userId = User?._id;
    const dispatch = useDispatch();
    console.log('review', product);
   

    const subtraction = () => {
        setNum(num -1)
       
    }
    const addition = () => {
        setNum(num + 1)
        
    }

    function onClick(e) {
        console.log('clicked')
        e.preventDefault();
        setTalle(e.target.value)
        //dispatch(setProduct(product))
        //dispatch(setTalle(e.target.value))
    }

    const addCart = () => {
        if(user) { 
            let obj = {
                userId: userId,
                productId: product._id,
                qty: num,
                talle: talle
                  }
            dispatch(addItemToCart(obj));
            
            
            setNum(1)
                }else{
                    let obj= {
                        product: product,
                        qty: num,
                        talle: talle
                    }
                  dispatch(addEmptyCart(obj));
                  
                  
                  setNum(1) 
                  setTalle('')  
                }
    
    }

    return (
        product
            ?
            <div className={style.info_container}>
                <div className={style.ctn_details}>
                    <h1 className={style.info_name}>{product.name}</h1>
                    <h2 className={style.info_price}>$ {product.price}</h2>
                    <h2 className={style.info_description}>{product.description}</h2>
                    {
                        product.reviews.map(r => (
                            <div>
                                <h3 className={style.info_review_rating}>{r.rating}</h3>
                                <p className={style.info_review_comment}>{r.comment}</p>
                                <p className={style.info_review_user}>{r.user.email}</p>
                            </div>
                        ))
                    }
                </div>

                <div className={style.info_talles}>
                    {
                          product.talle ?
                            product.talle.map(t => {
                                return (
                                    <Button
                                        value={t.name}
                                        onClick={onClick}
                                        variant={  talle === t.name ? 'outlined' : 'text'}
                                        style={{ 'color': '#000000' }}
                                    >
                                        {t.name}
                                    </Button>
                                )
                            }) : null  
                    }
                </div>

                <div className={style.info__cart}>
                <div>
            <div >
                <Button variant='outlined' style={{ 'color': '#000000', 'width' : 10, 'margin': 10}} disabled={num === 1} onClick={subtraction}>
                    -
                </Button>
                <span>{num}</span>
                <Button variant='outlined' style={{ 'color': '#000000', 'width' : 5   , 'margin': 10}}  onClick={addition}>
                    +
                </Button>
            </div>
            <div>

            <button className={style.btnCart} onClick={addCart}>   AGREGAR AL CARRITO </button>

            </div>
        </div>
                </div>

            </div >
            :
            "Loading..."
    )
}


export default ProductInfo;