import React from "react";
import { useDispatch } from "react-redux";
import { filterTickets } from "../../../redux/actions/admin.actions";

const TicketsFilter = () => {
    
    const dispatch = useDispatch()

    const handleSelect = (e) => {
        dispatch(filterTickets(e.target.value))
    }

    return (
        <div>
            <select onChange={handleSelect}>
                <option selected value="all">Todas</option>
                <option value="pending">Pendiente</option>
                <option value="processing">Procesando</option>
                <option value="finished">Finalizada</option>
                <option value="canceled">Cancelada</option>
            </select>
        </div>
    )
}

export default TicketsFilter;