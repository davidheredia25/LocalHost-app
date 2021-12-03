import React from 'react';
import NavBarProfile from './NavBarProfile';
import style from './Styles/Orders.module.scss';
import Table from 'react-bootstrap/Table'

const Ordens = () => {
    return (
        <div className={style.ctnSup}>
            <NavBarProfile />
            <div className={style.ctnDetail}>
                <h3 className={style.titlePrin}>   Mis ordenes</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>N de orden</th>
                            <th>Fecha</th>
                            <th>Productos</th>
                            <th>Estado</th>
                            <th>Direccion </th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>343253535</td>
                            <td>25/05/2021</td>
                            <td>David</td>
                            <td>Pendiente</td>
                            <th>Serrano 1109</th>
                            <th>$ 12000</th>

                        </tr>

                    </tbody>
                </Table>
            </div>

        </div>
    )
}

export default Ordens;