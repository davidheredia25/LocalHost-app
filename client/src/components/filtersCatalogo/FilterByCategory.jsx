import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterCategory } from "../../redux/actions/filters.actions";
import { getProducts } from "../../redux/actions/products.actions";
import styles from "./filtersCatalogo.module.css";
import { Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FilterByCategory = ({ brands, categories }) => {
    
    const dispatch = useDispatch();
    const { brand, subcategory, name, order } = useSelector(state => state.filters)
    const [open, setOpen] = useState(false);
    let brandFound;

    const handleClick = (e) => {
        dispatch(setFilterCategory(e.target.value))
        dispatch(getProducts({ brand, category: e.target.value, subcategory, name, order }))
    }

    return (
        <div>
            <button className={styles.buttonTitle} onClick={() => setOpen(!open)}><strong>CATEGORIAS</strong><ArrowDropDownIcon /></button>
            {
                open ?
                <div className={styles.filtersList}>
                {
                    brand ? 
                    (brands.find(b => b.name === brand)).categories.map(c => {
                        return (
                            <button 
                                className={styles.button} 
                                value={c.name} 
                                onClick={handleClick}
                            >
                                {c.name.toUpperCase()}
                            </button>
                        )
                    }) : null
                }
                {
                    !brand ?
                    categories?.map(x => {
                        return (
                            <button  
                                className={styles.button} 
                                value={x.name} 
                                onClick={handleClick}
                            >
                                {x.name.toUpperCase()}
                            </button>
                        )
                    }) : null
                }    
                </div> : null
            }
        </div>
    )
}

export default FilterByCategory;