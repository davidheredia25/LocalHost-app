import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import FiltersContainer from "../../filtersCatalogo/FiltersContainer";
import AppliedFilters from "../../filtersCatalogo/AppliedFilters";
import { getProducts } from "../../../redux/actions/products.actions";

const Catalogo = () => {
    
    const dispatch = useDispatch();
    const { filters } = useSelector(state => state)
    const { products } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts({ ...filters }))
    }, [])

    return (
        <div>
            <AppliedFilters filters={filters} />
            <FiltersContainer />
            {
                products?.length ? <Cards products={products}/> : "Loading..."
            }
            
        </div>
    )
}

export default Catalogo;