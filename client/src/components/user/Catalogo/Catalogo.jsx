import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import FiltersContainer from "../../filtersCatalogo/FiltersContainer";
import AppliedFilters from "../../filtersCatalogo/AppliedFilters";
import { getProducts } from "../../../redux/actions/products.actions";

 import NavBar from "../NavBar/NavBar";
//  import Pagination from '../Pagination/Pagination'


const Catalogo = () => {
    
    const dispatch = useDispatch();
    const { filters } = useSelector(state => state)
    const { products } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts({ ...filters }))
    }, [])

    return (
        <div>

            <NavBar />

            <AppliedFilters filters={filters} />
            <FiltersContainer />
            {
                products?.length ? <Cards products={products}/> : "Loading..."
            }
            
            {/* <Pagination /> */}
        </div>
    )
}

export default Catalogo;