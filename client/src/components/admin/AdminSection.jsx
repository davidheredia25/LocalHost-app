import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BrandEdit from "./Brand/Edit/BrandEdit";
import BrandCreate from "./Brand/Create/BrandCreate";
import UsersSection from "./Users/UsersSection";
import CreateProduct from "./ProductCRUD/Create/CreateProduct";
import EditProducts from "./ProductCRUD/Edit/EditProducts";
import AdminWelcome from "../admin/AdminWelcome/AdminWelcome"
import TicketsSection from "../admin/Tickets/TicketsSection"
import { getUsers, getTickets } from "../../redux/actions/admin.actions";
import { getProducts } from "../../redux/actions/products.actions";
import { getBrands, getCategories, getSubcategories } from "../../redux/actions/brand.actions";
import style from "./Admin.module.css";

const AdminSection = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getProducts({}))
        dispatch(getBrands())
        dispatch(getCategories())
        dispatch(getSubcategories())
        dispatch(getTickets())
    }, [])

    const { section } = useSelector(state => state.admin)
    const { products } = useSelector(state => state.products)
    
    return (
        <div className={style.ctnSec} >
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
                    ? <EditProducts products={products} />
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
            {
               section === "" 
                    ? <AdminWelcome />
                    : null
            }      
        </div>
    )
}

export default AdminSection;