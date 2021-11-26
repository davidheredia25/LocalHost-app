import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Card.scss';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Card = ({product}) => {

    console.log('cardProduct',product)
      
    return (
        <div className='container_card'>
                
                <div >
                    <img className='card_image' src={product.image}></img>
                </div >
                <div className='card_div_name'>
                    <p className='card_name'>{product.name}</p>
                </div>
                    <div className='card_div_name'>
                    <p className='card_price'>${product.price}</p>
                    </div>
            <div className='card_div_button'>
                 <Button variant='contained' size="small" style={{'backgroundColor': '#000000', 'width': 70}}  ><ShoppingCartIcon/></Button>
                </div> 
            
            
        </div>
    );
};

export default Card;