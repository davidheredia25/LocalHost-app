import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRol, deleteUser, getUsers } from "../../../redux/actions/admin.actions.js";


const UsersSection = () => {

    const dispatch = useDispatch();
    const { users } = useSelector(state => state.admin);
    console.log(users);

    useEffect(() => {
        console.log(users)
        dispatch(getUsers())
      }, [dispatch]);

    const handleRol = (e) => {
        dispatch(changeRol(e.target.value))
    }

    const handleDelete = (e) =>{
        dispatch(deleteUser(e.target.value))
    }


    

    return (
        <div>
            {
                users?.map(u => {
                    return (
                        <div>
                            <h3>{u.email}</h3>
                            <button 
                                value={u._id}
                                onClick={handleRol}
                            >
                                {u.isAdmin ? "Hacer Usuario" : "Hacer Admin"}
                            </button>
                            <button 
                            value={u._id}
                            onClick={handleDelete}>
                                eliminar usuario
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UsersSection;