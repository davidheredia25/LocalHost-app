import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import FiltersContainer from "../../filtersCatalogo/FiltersContainer";
import AppliedFilters from "../../filtersCatalogo/AppliedFilters";
import { filterProducts } from "../../../redux/actions/filters.actions";

const Catalogo = () => {
    
    const dispatch = useDispatch();
    const { brand, category, subcategory } = useSelector(state => state.filters)
    
    useEffect(() => {
        dispatch(filterProducts({ brand, category, subcategory }))
    }, [])

    return (
        <div>
            <AppliedFilters />
            <FiltersContainer />
            <Cards />
        </div>
    )
}

export default Catalogo;