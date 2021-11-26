import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Card.scss';


const Card = ({product}) => {

    console.log('cardProduct',product)
      
    return (
        <div className='container'>
                
                <div >
                    <img className='image' src={product.image}></img>
                </div >
                <div>
                    <p className='name'>{product.name}</p>
                </div >
                    <div>
                    <p className='name'>{product.price}</p>
                    </div>
            <div className='button'>
                 <button>Add to Cart</button>
                </div> 
            
            
        </div>
    );
};

export default Card;