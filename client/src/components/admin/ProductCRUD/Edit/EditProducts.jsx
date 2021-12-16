
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDelete } from "../../../../redux/actions/Crud.actions";
import { getProducts, getProductsDetails } from "../../../../redux/actions/products.actions";
import Table from 'react-bootstrap/Table';
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import style from '../Style/EditProducts.module.scss';
import Modal from 'react-bootstrap/Modal';
import DivParaModal from './DivParaModal.jsx'



const EditProducts = ({ products }) => {

    const dispatch = useDispatch();
    const { product } = useSelector(state => state.products)

    const [idProduct, setIdProduct] = useState("")


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);

    const handleShow1 = (id) => {
        setIdProduct(id);
        setShow1(true);
    }
    const [input, setInput] = useState("");
    const handleInputChange = (e) => {
        setInput(e.target.value)
        dispatch(getProducts({ name: e.target.value }))
    }

    const handleDelete = () => {
        dispatch(productDelete(idProduct))
        handleClose1()

    }

    const handleEdit = (id) => {
        console.log(id)
        dispatch(getProductsDetails(id))
        handleShow()
    }


    return (
        <div>
            <h1 className={style.titleSup}>Editar/Eliminar productos</h1>
            <div>

                <input value={input} onChange={handleInputChange} type="text" />

            </div>
            <Table    striped bordered hover>
                <thead >
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
                <tbody >
                    {
                        products?.length ? products.map(x => {
                            let id = x._id
                            return (
                                <tr >
                                    <td> <img className={style.image} src={x.image} alt={x.name} /></td>
                                    <td>{x.name}</td>
                                    <td>{x.brand.name.charAt(0).toUpperCase() + x.brand.name.slice(1)}</td>
                                    <td>{x.name.charAt(0).toUpperCase() + x.category.name.slice(1)}</td>
                                    <td>{x.type.name.charAt(0).toUpperCase() + x.type.name.slice(1)}</td>
                                    <td> $ {x.price}</td>
                                    <td>
                                        <button className={style.btnIcon} onClick={() => handleEdit(x._id)}>
                                            <BsPencilSquare className={style.icon} />
                                        </button>
                                        <button className={style.btnIcon} onClick={() => handleShow1(x._id)}>
                                            <RiDeleteBinLine className={style.icon} />
                                        </button>
                                    </td>

                                </tr>

                            )
                        }) : null
                    }
                </tbody>
            </Table>

            <Modal
                show={show}
                size="lg"
                centered
            >
                <Modal.Body>
                    {
                        product
                            ?
                            <DivParaModal product={product} handleClose={handleClose} />
                            : null
                    }
                </Modal.Body>
            </Modal>

            <Modal
                show={show1}
                centered
            >
                <Modal.Body>
                    <h1 className={style.titleDelete}> Seguro desea eliminar el Producto?</h1>
                    <div className={style.ctnBtn}>
                        <button className={style.btn} onClick={handleDelete} >ACEPTAR</button>
                        <button className={style.btn} onClick={handleClose1} >CANCELAR</button>
                    </div>
                </Modal.Body>


            </Modal>

        </div>
    )
}

export default EditProducts;