import React from "react";
import { useDispatch } from "react-redux";
import { changeStatus, cancelTicket } from "../../../redux/actions/admin.actions.js";

const TicketModal = ({ ticket, handleClose }) => {
    
    const dispatch = useDispatch()
    const { status, _id, items } = ticket;

    const handleChangeStatus = () => {
        dispatch(changeStatus(_id))
    }

    const handleCancel = () => {
        dispatch(cancelTicket(_id))
    }

    const handleX = () => {
        handleClose()
    }

    return (
        <div>
            <button onClick={handleX}>X</button>
            <div>
                <div>
                    <p>Productos:</p>
                    {
                        items.map(i => <p>{i.name}</p>)
                    }
                </div>
                <p>Estado actual: {status}</p>
            </div>
            {
                status === "pending" || status === "processing" ?
                <div>
                    <button onClick={handleChangeStatus}>
                        {status === "pending"? "Procesar Orden" : null}
                        {status === "processing"? "Finalizar Orden" : null}
                    </button>
                    {
                        status !== "canceled" ?
                        <button onClick={handleCancel}>Cancelar Orden</button>
                        : null
                    }
                </div> : null
            }
        </div>
    )
}

export default TicketModal;