import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterBrand } from "../../redux/actions/filters.actions";
import { getProducts } from "../../redux/actions/products.actions";
import styles from "./filtersCatalogo.module.css";
import { Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FilterByBrand = ({ brands }) => {
    
    const dispatch = useDispatch();
    const { category, subcategory, name, order } = useSelector(state => state.filters)
    
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        dispatch(setFilterBrand(e.target.value))
        dispatch(getProducts({ brand: e.target.value, category, subcategory, name, order }))
    }

    return (
        <div>
            <button className={styles.buttonTitle} onClick={() => setOpen(!open)}><strong>MARCAS </strong> <ArrowDropDownIcon /> </button>
            {
                open ? 
                    <div className={styles.filtersList}>
                    {
                        brands && brands.map(x => {
                            return (
                                <button   className={styles.button} value={x.name} onClick={handleClick}>{x.name.toUpperCase()}</button>
                            )
                        })
                    }
                    </div> : null
            }
         </div>
    )
}

export default FilterByBrand;