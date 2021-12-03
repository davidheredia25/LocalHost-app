import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProducts } from '../../../redux/actions/products.actions';
import Card from '../Card/Card';
import './Cards.scss';


const Cards = ({products}) => {
    const dispatch = useDispatch();
    /* const { brand, category, subcategory } = useSelector(state => state.filters) */

/*     useEffect(() => {
        return () => dispatch(removeProducts())
    }, [dispatch])
 */
    return (

        <div className='container'>
           {
            !products?.length 
                ? <p>Loading...</p> 
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