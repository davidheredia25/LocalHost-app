import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Card.scss';
import { MdOutlineAddShoppingCart, MdFavoriteBorder } from 'react-icons/md';
import Modal from 'react-modal';


const Card = ({ product }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

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
            backgroundColor: '#000000',
            color: 'rgb(255, 255, 255)',
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
                        <button onClick={closeModal}> CANCELAR</button>
                        <button onClick={closeModal}> AGREGAR </button>
                    </div>

                   
                </div>

            </Modal>

        </div>
    );
};

export default Card;