import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTickets,
  findTicket,
} from "../../../redux/actions/admin.actions.js";
import Loading from "../../user/Loading/Loading";
import TicketModal from "./TicketModal";
import Modal from 'react-bootstrap/Modal';
import TicketsFilter from "./TicketsFilter.jsx";

const TicketsSection = () => {

  const dispatch = useDispatch();
  const { ticketsFiltered, ticket } = useSelector((state) => state.admin);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  const handleTicketClick = (ticketId) => {
    dispatch(findTicket(ticketId))
    handleShow()
  }

  return (
    <div>
      {ticketsFiltered?.length ? (
        <div>
          <TicketsFilter />
          <div>
            {ticketsFiltered.map((t) => {
              return (
                <div>
                  {/* <h3>Fecha: {t.fecha}</h3>
                  <h3>Usuario: {t.user.nombre}</h3>
                  <h3>Estado: {t.estado}</h3> */}
                  <p>{t._id}</p>
                  <button onClick={() => handleTicketClick(t._id)}>EDITAR</button>
                </div>
              );
            })}
          </div>
          <Modal show={show} size="lg" centered>
            <Modal.Body>
                {   
                    ticket ?
                        <TicketModal ticket={ticket} handleClose={handleClose} />
                        : <Loading />
                }
            </Modal.Body>
          </Modal>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default TicketsSection;
