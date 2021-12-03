import React from "react";
import { useSelector } from "react-redux";
import BrandEdit from "./Brand/BrandEdit";
import BrandCreate from "./Brand/BrandCreate";
import UsersSection from "./Users/UsersSection";
import CreateProduct from "./ProductCRUD/CreateProduct";
import EditProducts from "./ProductCRUD/EditProducts";

const AdminSection = () => {
    
    const { section } = useSelector(state => state.admin)
    
    return (
        <div>
            {
               section === "users" 
                    ? <UsersSection />
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