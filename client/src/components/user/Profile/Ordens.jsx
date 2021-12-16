import React, {useEffect} from 'react';
import { useSelector , useDispatch} from 'react-redux';
import NavBarProfile from './NavBarProfile';
import style from './Styles/Orders.module.scss';
import Table from 'react-bootstrap/Table';
import { getTickets } from '../../../redux/actions/login.actions';

const Ordens = () => {
    const {user} = useSelector(state => state.login)
    const { tickets} =useSelector(state => state.login)
    const  dispatch = useDispatch()
    let User;
    if(user?.email) User = user
    else User = user?.user;
    
    useEffect(() => {
        dispatch(getTickets(User._id))
    }, [])
    console.log('tickets', tickets)
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
                        {tickets.length?
                        tickets.map(x => {
                            return(
                            <tr>
                            <td>{x.numOrden}</td>
                            <td>{x.date}</td>
                            <td>{x.products.map( p => {
                                return(
                                <p><b>{p.qty}</b>  x {p.product.name}   ${p.product.price}</p>
                                )
                            })}</td>
                            <td>{x.state}</td>
                            <th>{x.direccion}</th>
                            <th>$ {x.precioTotal}</th>

                        </tr>
                            )
                        })
                             : null    
                    }
                        

                    </tbody>
                </Table>
            </div>

        </div>
    )
}

export default Ordens;