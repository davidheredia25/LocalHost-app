import React from "react";
import FilterByBrand from "./FilterByBrand";
import FilterByCategory from "./FilterByCategory";
import FilterBySubcategory from "./FilterBySubcategory";

const FiltersContainer = () => {

    return (
        <div>
            <FilterByBrand />
            <FilterByCategory />
            <FilterBySubcategory />
        </div>
    )
}