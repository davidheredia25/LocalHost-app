import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrandForm from "./BrandForm";
import CategoryForm from "./CategoryForm";
import SubcategoryForm from "./SubcategoryForm";
import { getBrands } from "../../../redux/actions/brand.actions";

const BrandContainer = () => {

    const dispatch = useDispatch();
    const { brands, brandInfo } = useSelector(state => state.brand)

    useEffect(() => {
        dispatch(getBrands())
    }, [dispatch])

    return (
        <div>
            <BrandForm brands={brands} />
            {
                brandInfo.name ?
                <>
                    <CategoryForm />
                    <SubcategoryForm />
                </>
                : null
            }
        </div>
    )
};

export default BrandContainer;