import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterBrand } from "../../redux/actions/filters.actions";
import { getProducts } from "../../redux/actions/products.actions";
import styles from "./filtersCatalogo.module.css";
import { Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FilterByBrand = ({ brands }) => {
    
    const dispatch = useDispatch();
    const { category, subcategory } = useSelector(state => state.filters)
    
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        dispatch(setFilterBrand(e.target.value))
        dispatch(getProducts({ brand: e.target.value, category, subcategory }))
    }

    return (
        <div>
            <Button variant='contained' size="large" style={{'backgroundColor': '#000000', 'width': 150, 'marginBottom':10, 'marginLeft': 3 }} className={styles.buttonTitle} onClick={() => setOpen(!open)}><strong>MARCAS </strong> <ArrowDropDownIcon /> </Button>
            {
                open ? 
                    <div className={styles.filtersList}>
                    {
                        brands && brands.map(x => {
                            return (
                                <Button  style={{'backgroundColor': '#EEEEEE', 'width': 120, 'marginLeft': 17}}  className={styles.button} value={x.name} onClick={handleClick}>{x.name.toUpperCase()}</Button>
                            )
                        })
                    }
                    </div> : null
            }
         </div>
    )
}

export default FilterByBrand;