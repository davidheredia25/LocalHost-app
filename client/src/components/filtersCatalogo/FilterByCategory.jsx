import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterCategory } from "../../redux/actions/filters.actions";
import { getProducts } from "../../redux/actions/products.actions";
import styles from "./filtersCatalogo.module.css";

const FilterByCategory = ({ categories }) => {
    
    const dispatch = useDispatch();
    const { brand, subcategory } = useSelector(state => state.filters)

    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        dispatch(setFilterCategory(e.target.value))
        dispatch(getProducts({ brand, category: e.target.value, subcategory }))
    }

    return (
        <div>
            <button className={styles.buttonTitle} onClick={() => setOpen(!open)}><strong>CATEGORIAS</strong></button>
            {
                open ?
                <div className={styles.filtersList}>
                {
                    categories?.map(x => {
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

export default FilterByCategory;