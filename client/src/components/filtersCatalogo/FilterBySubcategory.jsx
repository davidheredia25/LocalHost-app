import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products.actions";
import { setFilterSubcategory } from "../../redux/actions/filters.actions";
import styles from "./filtersCatalogo.module.css";
import { Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { subcategoriesArray } from "./subcategoriesArray";

const FilterBySubcategory = ({ brands, subcategories }) => {
    
    const dispatch = useDispatch();
    const { brand, category } = useSelector(state => state.filters)

    const [open, setOpen] = useState(false);
    const handleClick = (e) =>{
        dispatch(setFilterSubcategory(e.target.value))
        dispatch(getProducts({brand, category, subcategory: e.target.value}))
    }
    
    return ( 
        <div>
            <button  className={styles.buttonTitle} onClick={() => setOpen(!open)}><strong>TIPOS</strong><ArrowDropDownIcon /></button>
            {
                open ? 
                <div className={styles.filtersList}>
                { 
                    brand && category ? 
                    (
                        ( (brands.find(b => b.name === brand)).categories.find(c => c.name === category) ).types.map(t => {
                            return (
                                <button 
                                    className={styles.button} 
                                    value={t} 
                                    onClick={handleClick}
                                >
                                    {t.toUpperCase()}
                                </button>
                            )
                        })

                    ) : null
                }
                 { 
                    brand && !category ? 
                    (  
                        [... new Set(
                            (((brands.find(b => b.name === brand)).categories.map(c => {
                                    return c.types.map(e => e)
                                }
                            )).flat())
                        )].map(t => {
                            return (
                                <button  
                                    className={styles.button} 
                                    value={t} 
                                    onClick={handleClick}
                                >
                                    {t.toUpperCase()}
                                </button>
                            )
                        })

                    ) : null
                }
                {
                    !brand && category ?
                    (
                       subcategoriesArray(brands, category).map(e => {
                        return (
                            <button 
                                className={styles.button} 
                                value={e} 
                                onClick={handleClick}
                            >
                                {e.toUpperCase()}
                            </button>
                        )
                       })
                    ) : null
                }
                {   
                    !brand && !category && subcategories?.length ? 
                    subcategories.map(x => {
                        return (
                            <button  className={styles.button} value={x} onClick={handleClick}>{x.toUpperCase()}</button>
                        )
                    }) : null
                }
                </div> : null
            }
        </div> 
    )
    
}

export default FilterBySubcategory;