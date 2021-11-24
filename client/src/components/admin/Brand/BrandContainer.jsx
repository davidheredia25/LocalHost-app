import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrandForm from "./BrandForm";
import CategoryForm from "./CategoryForm";

const BrandContainer = () => {

    const dispatch = useDispatch();
    const { brands, brandInfo } = useSelector(state => state.brand)

    useEffect(() => {
        dispatch(getBrands())
    }, [dispatch])

    return (
        <div>
            <BrandForm brands={brands} />
            <CategoryForm />
        </div>
    )
};

export default BrandContainer;