/* import React, {useEffect}from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets, changeStatus } from "../../../redux/actions/admin.actions.js";
import Loading from "../../user/Loading/Loading"

const UsersSection = () => {

    const dispatch = useDispatch();
    const {tickets} = useSelector(state => state.admin);
    

    useEffect(() => {
        console.log(tickets)
        dispatch(getTickets())
      }, [dispatch]);

    
      const handleClick = (obj) =>{
          dispatch(changeStatus(obj))
      }

    return (
        <div>
            {
                tickets?.lenght 
                ?
                <div>
                 {tickets?.map(t => {
                    return (
                        <div>
                            <h3>Fecha: {t.fecha}</h3>
                            <h3>Usuario: {t.user.nombre}</h3>
                            <h3>Estado: {t.estado}</h3>
                            <button 
                                value={t._id}
                                onClick={() => handleClick({id: t._id, status: t.status})}
                            >
                                {t.status === "pending"? "Procesar" : null  }
                                {t.status === "processing"? "Finalizar" : null  }
                            
                            </button>
                        </div>
                    )
                })}
                </div>
                :
                (
                    <Loading/>
                )
            }
        </div>
    )
}

export default UsersSection; */