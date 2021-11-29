import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products.actions";
import { setFilterSubcategory } from "../../redux/actions/filters.actions";
import styles from "./filtersCatalogo.module.css";

const FilterBySubcategory = ({ subcategories }) => {
    
    const dispatch = useDispatch();
    const { brand, category } = useSelector(state => state.filters)

    const [open, setOpen] = useState(false);

    const handleClick = (e) =>{
        dispatch(setFilterSubcategory(e.target.value))
        dispatch(getProducts({brand, category, subcategory: e.target.value}))
    }
    
    return ( 
        <div>
            <button className={styles.buttonTitle} onClick={() => setOpen(!open)}><strong>TIPOS</strong></button>
            {
                open ? 
                <div className={styles.filtersList}>
                {
                    subcategories && subcategories.map(x => {
                        return (
                            <button className={styles.button} value={x.name} onClick={handleClick}>{x.name.toUpperCase()}</button>
                        )
                    })
                }
                </div> : null
            }
        </div> 
    )
    
}

export default FilterBySubcategory;