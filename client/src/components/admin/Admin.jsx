import React from "react";
import AdminIndex from "./AdminIndex";
import AdminSection from "./AdminSection";
import style from "./Admin.module.css";

const Admin = () => {

    return (
        <div className={style.adminContainer}>
            <AdminIndex />
            <AdminSection />
        </div>
    )
}

export default Admin;