import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProducts } from '../../../redux/actions/products.actions';
import Card from '../Card/Card';
import './Cards.scss';
import Pagination from '../Pagination/Pagination'


const Cards = ({products}) => {
    const dispatch = useDispatch();
    const { favorites } = useSelector(state => state.favorite)
    /* const { brand, category, subcategory } = useSelector(state => state.filters) */

/*     useEffect(() => {
        return () => dispatch(removeProducts())
    }, [dispatch])
 */
    return (

        <div className='container'>
            <Pagination /> 
           {
            !products?.length && !favorites
                ? <p>Loading...</p> 
                : (
                    <div className='cards'>
                        {
                                products && products.map(product => <Card key={product._id} product={product} favorites={favorites} />)
                            }
                        
    
                    </div>
                )}
        </div>
    );
};

export default Cards;