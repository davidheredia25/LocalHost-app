import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import FiltersContainer from "../../filtersCatalogo/FiltersContainer";
import AppliedFilters from "../../filtersCatalogo/AppliedFilters";
import { getProducts } from "../../../redux/actions/products.actions";
import styles from "./Catalogo.module.scss";

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
            <div>
                <AppliedFilters filters={filters} />
            </div>
            <div className={styles.filtersAndCards}>
                <FiltersContainer />
                <div>
                {
                    products?.length ? <Cards products={products}/> : "Loading..."
                }
                </div>
            </div>
            
            {/* <Pagination /> */}
        </div>
    )
}

export default Catalogo;