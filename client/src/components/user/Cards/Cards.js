import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import './Cards.scss';


const Cards = () => {
    const dispatch = useDispatch();
    //const { products } = useSelector( state => state.products);
    //ejemplo para probar el render
    const products = [{name: 'Zapatillas air 2021', brand: 'Nike', sexo: 'Masculino', size: ['S', 'M', 'L', 'XL', 'XXL'], price: 2000},{name: 'Zapatillas air 2021', brand: 'Nike', sexo: 'Masculino', size: ['S', 'M', 'L', 'XL', 'XXL'], price: 2000},{name: 'Zapatillas air 2021', brand: 'Nike', sexo: 'Masculino', size: ['S', 'M', 'L', 'XL', 'XXL'], price: 2000}]
    

    return (

        <div className='container'>
            {
            !products.length 
                ? <p>Not Found</p> 
                : (
                    <div className='cards'>
                        {
                                products && products.map(product => <Card key={product.id} product={product} />)
                            }
                        
    
                    </div>
                )
            }
        </div>
    );
};

export default Cards;