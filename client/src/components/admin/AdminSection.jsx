import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BrandEdit from "./Brand/Edit/BrandEdit";
import BrandCreate from "./Brand/Create/BrandCreate";
import UsersSection from "./Users/UsersSection";
import CreateProduct from "./ProductCRUD/Create/CreateProduct";
import EditProducts from "./ProductCRUD/Edit/EditProducts";
import TicketsSection from "./Tickets/TicketsSection"
import { getUsers } from "../../redux/actions/admin.actions";
import { getProducts } from "../../redux/actions/products.actions";
import { getBrands, getCategories, getSubcategories } from "../../redux/actions/brand.actions";

const AdminSection = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getProducts({}))
        dispatch(getBrands())
        dispatch(getCategories())
        dispatch(getSubcategories())
    }, [])

    const { section } = useSelector(state => state.admin)
    
    return (
        <div>
            {
               section === "users" 
                    ? <UsersSection />
                    : null
            }
            {
               section === "tickets" 
                    ? <TicketsSection />
                    : null
            }
            {
               section === "productcreate" 
                    ? <CreateProduct />
                    : null
            }   
            {
               section === "productedit" 
                    ? <EditProducts />
                    : null
            }   
            {
               section === "brandcreate" 
                    ? <BrandCreate/>
                    : null
            }   
            {
               section === "brandedit" 
                    ? <BrandEdit />
                    : null
            }      
        </div>
    )
}

export default AdminSection;