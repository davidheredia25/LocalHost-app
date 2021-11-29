import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Card.scss';
import { MdOutlineAddShoppingCart, MdFavoriteBorder } from 'react-icons/md';
import { addItemToCart, setCount } from '../../../redux/actions/cart.actions.js';
import { setTalle, setProduct } from "../../../redux/actions/cart.actions";
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from 'react-modal';


const Card = ({ product }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const dispatch=useDispatch();
    const { cartProduct } = useSelector(state => state.cart) 
    const { cart } = useSelector(state => state.cart) 
    console.log('carrito', cart)
    console.log('cartProduct',cartProduct)
    const [num, setNum] = useState(1);
    const { talle } = useSelector(state => state.cart.cartProduct)

    function onClick(e) {
        e.preventDefault();
        dispatch(setProduct(product))
        dispatch(setTalle(e.target.value))
    }

    const subtraction = () => {
        setNum(num -1)
        dispatch(setCount(num - 1))
    }
    const addition = () => {
        setNum(num + 1)
        dispatch(setCount(num + 1))
    }

    const addCart = () => {
        dispatch(addItemToCart());
        closeModal();
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
            backgroundColor: '#EEEEEE',
            color: '#000000',
        },
    };

    return (
        <div className='container_card'>

            <div className='ctn_icons'>
                <MdFavoriteBorder className='card_icon' />
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

                    <div >
                        <p className='card_name'>{product.name}</p>
                        <p className='card_price'>${product.price}</p>
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
                        <div >
                            <Button variant='outlined' style={{ 'color': '#000000', 'width' : 10, 'margin': 10}} disabled={num === 1} onClick={subtraction}>
                                -
                            </Button>
                            <span>{num}</span>
                            <Button variant='outlined' style={{ 'color': '#000000', 'width' : 5   , 'margin': 10}}  onClick={addition}>
                                +
                            </Button>
                     </div>
                        <button onClick={closeModal}> CANCELAR</button>
                        <button onClick={addCart}> AGREGAR </button>
                    </div>

                   
                </div>

            </Modal>

        </div>
    );
};

export default Card;