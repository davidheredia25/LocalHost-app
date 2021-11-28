import React, { useEffect } from 'react';
import style from './BrandsHome.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBrands } from "../../../redux/actions/brand.actions";
import { setFilterBrand } from "../../../redux/actions/filters.actions";

const BrandsHome = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { brands } = useSelector(state => state.brand)

    useEffect(() => {
        dispatch(getBrands())
    }, [])

    const handleClick = (e) => {
        let brandName = e.target.id;
        dispatch(setFilterBrand(brandName))
        navigate("/catalogo")
    }

    return (
        <div className={style.ctnBrands}>
            {
                brands?.map(x => {
                    return (
                            <img
                                onClick={(e) => handleClick(e)}
                                className={style.imgIcon} 
                                src={x.image}
                                id={x.name}
                            />
                    )
                })
            }
        </div>
    )
}

export default BrandsHome;