import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProducts } from '../../../redux/actions/products.actions';
import Card from '../Card/Card';
import Orders from '../Orders/Orders';
import SearchCatalogo from '../SearchCatalogo/SearchCatalogo';
import './Cards.scss';


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
            <Orders/>
            <SearchCatalogo/>
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