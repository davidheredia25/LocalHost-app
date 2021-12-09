import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Card.scss';
import { MdOutlineAddShoppingCart, MdFavoriteBorder } from 'react-icons/md';
import { addItemToCart, setCount, setTalle, setProduct, addEmptyCart } from '../../../redux/actions/cart.actions.js';
import { Button } from '@mui/material';
import Modal from 'react-modal';
import { verifyFavorite } from './verifyFavorite';
import { addFavorite, removeFavorite } from "../../../redux/actions/favorite.actions";



const Card = ({ product, favorites }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    console.log('product',product)
    const [num, setNum] = useState(1);
    //const { talle } = useSelector(state => state.cart.cartProduct)
    const { user } = useSelector(state => state.login)
    const userId = user?._id;


    const boolean = verifyFavorite(favorites, product._id)

    const [favBool, setFavBool] = useState(boolean)

    function onClick(e) {
        console.log('clicked')
        e.preventDefault();
        dispatch(setProduct(product))
        //dispatch(setTalle(e.target.value))
    }

    const subtraction = () => {
        setNum(num - 1)
        dispatch(setCount(num - 1))
    }
    const addition = () => {
        setNum(num + 1)
        dispatch(setCount(num + 1))
    }

    const addCart = () => {
        if(user) { 
        let obj = {
            userId: userId,
            productId: product._id,
            qty: num
              }
        dispatch(addItemToCart(obj));
        closeModal();
            }else{
              dispatch(addEmptyCart(product));
              closeModal();  
            }

    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
        },
    };

    const handleFavorite = () => {
        let isFav = !favBool
        setFavBool(!favBool)
        if(!isFav) {
            dispatch(removeFavorite(product._id))
        }
        else {
            dispatch(addFavorite(product))
        }
    }

    return (
        <div className='container_card'>
            <div className='ctn_icons'>
                {
                    user ?
                    <button className='btn_icons' value={product._id} onClick={handleFavorite}>
                        <MdFavoriteBorder className={favBool ? 'card_icon_true' : 'card_icon'} />
                    </button>
                    : null
                }
                <MdOutlineAddShoppingCart className='card_icon' onClick={openModal} />
            </div>
            <Link to={`/detail/${product._id}`} className='card_link'>
                <img className='card_image' src={product.image} alt={product.name} />

                <div className='card_price_name'>
                    <p className='card_name'>{product.name}</p>
                    <p className='card_price'>${product.price}</p>
                </div>
            </Link>

            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
            >
                <div className='card_ctn_modal'>
                    <img className='card_image' src={product.image} alt={product.name} />

                    <div className='card_ctn_info' >
                        <p className='card_name_modal'>{product.name}</p>
                        <p className='card_price__modal'>${product.price}</p>
                        <div className='info_talles'>
                            {
                                product.talle ?
                                    product.talle.map(t => {
                                        return (
                                            <Button
                                                value={t}
                                                onClick={onClick}
                                                variant={ 'text'}
                                                style={{ 'color': '#000000' }}
                                            >
                                                {t}
                                            </Button>
                                        )
                                    }) : null
                            }
                            <div>
                                <Button variant='outlined' style={{ 'color': '#000000', 'width': 10, 'margin': 10 }} disabled={num === 1} onClick={subtraction}>
                                    -
                                </Button>
                                <span>{num}</span>
                                <Button variant='outlined' style={{ 'color': '#000000', 'width': 5, 'margin': 10 }} onClick={addition}>
                                    +
                                </Button>
                            </div>
                        </div>
                        <div className='card_ctn_btn_modal'>

                            <button className='card_btn_modal' onClick={closeModal}> CANCELAR</button>
                            <button className='card_btn_modal' onClick={addCart}> AGREGAR </button>
                        </div>
                    </div>
                </div>

            </Modal>

        </div>
    );
};

export default Card;