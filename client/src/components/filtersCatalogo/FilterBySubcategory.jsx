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
            <Button variant='contained' size="large" style={{'backgroundColor': '#000000', 'width': 150, 'marginBottom':10, 'marginLeft': 3 }} className={styles.buttonTitle} onClick={() => setOpen(!open)}><strong>TIPOS</strong><ArrowDropDownIcon /></Button>
            {
                open ? 
                <div className={styles.filtersList}>
                { 
                    brand && category ? 
                    (
                        ( (brands.find(b => b.name === brand)).categories.find(c => c.name === category) ).types.map(t => {
                            return (
                                <Button 
                                    style={{'backgroundColor': '#EEEEEE', 'width': 120, 'marginLeft': 17}} 
                                    className={styles.button} 
                                    value={t} 
                                    onClick={handleClick}
                                >
                                    {t.toUpperCase()}
                                </Button>
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
                                <Button 
                                    style={{'backgroundColor': '#EEEEEE', 'width': 120, 'marginLeft': 17}} 
                                    className={styles.button} 
                                    value={t} 
                                    onClick={handleClick}
                                >
                                    {t.toUpperCase()}
                                </Button>
                            )
                        })

                    ) : null
                }
                {
                    !brand && category ?
                    (
                       subcategoriesArray(brands, category).map(e => {
                        return (
                            <Button 
                                style={{'backgroundColor': '#EEEEEE', 'width': 120, 'marginLeft': 17}} 
                                className={styles.button} 
                                value={e} 
                                onClick={handleClick}
                            >
                                {e.toUpperCase()}
                            </Button>
                        )
                       })
                    ) : null
                }
                {   
                    !brand && !category && subcategories?.length ? 
                    subcategories.map(x => {
                        return (
                            <Button  style={{'backgroundColor': '#EEEEEE', 'width': 120, 'marginLeft': 17}} className={styles.button} value={x} onClick={handleClick}>{x.toUpperCase()}</Button>
                        )
                    }) : null
                }
                </div> : null
            }
        </div> 
    )
    
}

export default FilterBySubcategory;