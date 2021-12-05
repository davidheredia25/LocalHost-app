import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterCategory } from "../../redux/actions/filters.actions";
import { getProducts } from "../../redux/actions/products.actions";
import styles from "./filtersCatalogo.module.css";
import { Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FilterByCategory = ({ brands, categories }) => {
    
    const dispatch = useDispatch();
    const { brand, subcategory } = useSelector(state => state.filters)
    const [open, setOpen] = useState(false);
    let brandFound;

    const handleClick = (e) => {
        dispatch(setFilterCategory(e.target.value))
        dispatch(getProducts({ brand, category: e.target.value, subcategory }))
    }

    return (
        <div>
            <Button variant='contained' size="large" style={{'backgroundColor': '#000000', 'width': 150, 'marginBottom':10, 'marginLeft': 3 }} className={styles.buttonTitle} onClick={() => setOpen(!open)}><strong>CATEGORIAS</strong><ArrowDropDownIcon /></Button>
            {
                open ?
                <div className={styles.filtersList}>
                {
                    brand ? 
                    (brands.find(b => b.name === brand)).categories.map(c => {
                        return (
                            <Button 
                                style={{'backgroundColor': '#EEEEEE', 'width': 120, 'marginLeft': 17}} 
                                className={styles.button} 
                                value={c.name} 
                                onClick={handleClick}
                            >
                                {c.name}
                            </Button>
                        )
                    }) : null
                }
                {
                    !brand ?
                    categories?.map(x => {
                        return (
                            <Button 
                                style={{'backgroundColor': '#EEEEEE', 'width': 120, 'marginLeft': 17}} 
                                className={styles.button} 
                                value={x.name} 
                                onClick={handleClick}
                            >
                                {x.name.toUpperCase()}
                            </Button>
                        )
                    }) : null
                }    
                </div> : null
            }
        </div>
    )
}

export default FilterByCategory;