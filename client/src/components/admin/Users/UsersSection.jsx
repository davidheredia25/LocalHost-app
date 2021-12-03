import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRol } from "../../../redux/actions/admin.actions.js";

const UsersSection = () => {

    const dispatch = useDispatch();
    const { users } = useSelector(state => state.admin);

    const handleRol = () => {
        dispatch(changeRol(e.target.value))
    }

    return (
        <div>
            {
                users?.map(u => {
                    return (
                        <div>
                            <h3>{u.email}</h3>
                            <button 
                                value={x._id}
                                onClick={handleRol}
                            >
                                {u.admin ? "Hacer Usuario" : "Hacer Admin"}
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UsersSection;