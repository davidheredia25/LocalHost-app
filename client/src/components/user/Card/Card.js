import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Card.scss';


const Card = ({product}) => {
      
    return (
        <div className='container'>
            
            <Link  to={`/detail/${product._id}`}>
            <div className='info'>  
                <div>
                    <p >{product.name}</p>
                </div >
                <div >
                    <p>{product.brand}</p>
                </div >
                <div>
                    <p >{product.sexo}</p>
                </div>
               </div> 
                
                <div className='size'>
                    {product.size?
                     product.size.map(s => {
                         return (
                         <p>{s}</p>
                         )
                     })
                     : null
                    }
                </div>
                <div className='info'>
                    <p >{product.price}</p>
                </div>
            </Link>

            <div className='button'>
                 <button>Add to Cart</button>
            </div>
            
            
        </div>
    );
};

export default Card;