import React from "react";
import FilterByBrand from "./FilterByBrand";
import FilterByCategory from "./FilterByCategory";
import FilterBySubcategory from "./FilterBySubcategory";

const FiltersContainer = () => {

    /* Componente Padre:  
    
    Acumula los filtros en el reducer:
    state.filters = {
        brand: "",        // "Nike"
        category: "",     // "Indumentaria"
        subcategory: "",  // "Remeras"
    }
    */

    return (
        <div>
            <FilterByBrand />
            <FilterByCategory />
            <FilterBySubcategory />
        </div>
    )
}

export default FiltersContainer;