import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import FiltersContainer from "../../filtersCatalogo/FiltersContainer";
import AppliedFilters from "../../filtersCatalogo/AppliedFilters";
import { getProducts } from "../../../redux/actions/products.actions";
import styles from "./Catalogo.module.scss";
import { resetAllFilters } from "../../../redux/actions/filters.actions";
import vans from './img/vans.jpg';


const Catalogo = () => {

    const dispatch = useDispatch();
    const { filters } = useSelector(state => state)
    const { products } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts({ ...filters }))
        return () => dispatch(resetAllFilters())
    }, [])

    return (
        <div>
            
            <img className={styles.imgCata} src={vans}  />
            <div className={styles.filtersAndCards}>
                <FiltersContainer />
                <div >
                    <div >
                        <AppliedFilters filters={filters} />
                    </div>
                    {
                        products?.length ? <Cards products={products} /> : "Loading..."
                    }
                </div>
            </div>

             
        </div>
    )
}

export default Catalogo;