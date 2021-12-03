import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrandForm from "../BrandCreate";
import CategoryForm from "../CategoryForm";
import SubcategoryForm from "../SubcategoryForm";
import { getBrands, getCategories } from "../../../../redux/actions/brand.actions";

const BrandContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands())
        dispatch(getCategories())
    }, [])

    const { brands, categories, brandInfo } = useSelector(state => state.brand)

    return (
        <div>
            <BrandForm brands={brands} />
            {
                brandInfo.name ?
                <>
                    <CategoryForm categories={categories} />
                    <SubcategoryForm />    
                </>
                : null
            }
        </div>
    )
};

export default BrandContainer;