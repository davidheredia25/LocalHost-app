import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterByBrand from "./FilterByBrand";
import FilterByCategory from "./FilterByCategory";
import FilterBySubcategory from "./FilterBySubcategory";
import { getBrands, getCategories, getSubcategories } from "../../redux/actions/brand.actions";

const FiltersContainer = () => {

    const dispatch = useDispatch();
    const { brands, categories, subcategories } = useSelector(state => state.brand)

    useEffect(() => {
        dispatch(getBrands())
        dispatch(getCategories())
        dispatch(getSubcategories())
    }, [])

    return (
        (brands?.length !== 0 && categories?.length !== 0 && subcategories?.length !== 0) 
            ?
            <div>
                <FilterByBrand brands={brands} />
                <FilterByCategory categories={categories} />
                <FilterBySubcategory subcategories={subcategories} />
            </div>
            :
            "Loading..."
        )
}

export default FiltersContainer;