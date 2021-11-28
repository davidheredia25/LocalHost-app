import React, { useEffect } from 'react';
import style from './BrandsHome.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBrandName, getBrands } from "../../../redux/actions/brand.actions";

const BrandsHome = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { brands } = useSelector(state => state.brand)

    useEffect(() => {
        dispatch(getBrands())
    }, [])

    const handleClick = (e) => {
        dispatch(setBrandName(e.target.value))
        navigate("/catalogo")
    }

    return (
        <div className={style.ctnBrands}>
            {
                brands?.map(x => {
                    return (
                        <img 
                            className={style.imgIcon} 
                            src={x.image} 
                            onClick={handleClick}
                            value={x.name}
                        /> 
                    )
                })
            }
        </div>
    )
}

export default BrandsHome;