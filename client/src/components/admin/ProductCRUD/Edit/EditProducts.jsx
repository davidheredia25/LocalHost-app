import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productDelete } from "../../../../redux/actions/Crud.actions";
import { getProductsDetails } from "../../../../redux/actions/products.actions";
import Table from 'react-bootstrap/Table';
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import style from '../Style/EditProducts.module.scss';
import Modal from 'react-bootstrap/Modal';
import DivParaModal from './DivParaModal.jsx'



const EditProducts = ({ products }) => {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleDelete = (e) => {
        dispatch(productDelete(e.target.value))
    }

    const handleEdit = (e) => {
        handleShow()
        dispatch(getProductsDetails(e.target.value))

    }


    return (
        <div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th  >Imagen</th>
                        <th >Nombre</th>
                        <th >Marca</th>
                        <th >Categoria</th>
                        <th >Tipo</th>
                        <th >Precio</th>
                        <th >Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(x => {
                            return (
                                <tr>
                                    <td> <img className={style.image} src={x.image} alt={x.name} /></td>
                                    <td>{x.name}</td>
                                    <td>{x.brand.name.charAt(0).toUpperCase() + x.brand.name.slice(1)}</td>
                                    <td>{x.category.name.charAt(0).toUpperCase() + x.category.name.slice(1)}</td>
                                    <td>{x.type.name.charAt(0).toUpperCase() + x.type.name.slice(1)}</td>
                                    <td> $ {x.price}</td>

                                    <td> <BsPencilSquare className={style.icon} value={x._id} onClick={handleEdit} />
                                        <RiDeleteBinLine className={style.icon} value={x._id} onClick={handleShow1} />
                                    </td>

                                </tr>
                                
                            )
                        })
                        
                        
                        
                    }
                </tbody>
            </Table>

            <Modal
                show={show}
                size="lg"
                centered
            >
                <Modal.Body>
                    <DivParaModal handleClose={handleClose} />
                </Modal.Body>


            </Modal>

            <Modal
                show={show1}
                centered
            >
                <Modal.Body>
                    <h1 className={style.titleDelete}> Seguro desea eliminar el Producto?</h1>
                    <div className={style.ctnBtn}>
                        <button className={style.btn} onClick={handleDelete} >Aceptar</button>
                        <button className={style.btn} onClick={handleClose1} >Cancelar</button>
                    </div>
                </Modal.Body>


            </Modal>

        </div>
    )
}

export default EditProducts;