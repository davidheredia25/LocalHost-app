import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/actions/products.actions';
import Card from '../Card/Card';
import './Cards.scss';


const Cards = () => {
    const dispatch = useDispatch();
    const { products } = useSelector( state => state.products);
    //ejemplo para probar el render
    console.log('productos', products)

    useEffect(() => {
        dispatch(getProducts({}))
    }, [dispatch])

    

    return (

        <div className='container'>
           {
            !products.length 
                ? <p>Not Found</p> 
                : (
                    <div className='cards'>
                        {
                                products && products.map(product => <Card key={product._id} product={product} />)
                            }
                        
    
                    </div>
                )}
        </div>
    );
};

export default Cards;