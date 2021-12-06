import React, { useState, useEffect } from 'react';
import style from './Styles/Dates.module.scss'
import { BsPencilSquare } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { editDateUser } from '../../../redux/actions/login.actions';


const Dates = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const { user } = useSelector(state => state.login)
    // const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('user')))

    // console.log('user?.user?.fristName Dates: ', user?.fristName);
    let User;
    if(user.email) User = user
    else User = user.user;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        console.log(User);
    }, [User]);


    const [input, setInput] = useState({
        fristName: '',
        lastName: '',
        image:'',
        document: '',
        dateOfBirth: '',
        telephone: '',
        direction: '',
        floor: '',
        department: '',
        location: '',
        city: '',
        postalCode: ''
    });

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const handleEdit = () => {
        handleShow();
        setInput({
            fristName: User.fristName,
            lastName: User.lastName,
            image: User.image,
            document: User.document,
            dateOfBirth: User.dateOfBirth,
            telephone: User.telephone,
            direction: User.direction,
            floor: User.floor,
            department: User.department,
            location: User.location,
            city: User.city,
            postalCode: User.postalCode,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editDateUser(User._id, input));
        setInput({
            fristName: '',
            lastName: '',
            image:'',
            document: '',
            dateOfBirth: '',
            telephone: '',
            direction: '',
            floor: '',
            department: '',
            location: '',
            city: '',
            postalCode: ''
        });
        handleClose();
    };

    return (
        <div className={style.ctnSup}>
            <h3 className={style.titlePrin}>Mis datos <BsPencilSquare className={style.icon} onClick={handleEdit} /></h3>
            <div className={style.ctnDetail} >
                <div className={style.ctnText}>
                    <div className={style.data}>
                        <p className={style.title1} >Nombre:</p>
                        <p className={style.user}> {User.fristName}</p>
                    </div>
                    <div className={style.data}>
                        <p className={style.title1} >Apellido:</p>
                        <p className={style.user}> {User.lastName}</p>
                    </div>
                    <div className={style.data}>
                        <p className={style.title1} >Email:</p>
                        <p className={style.user}> {User.email}</p>
                    </div>
                    <div className={style.data}>
                        <p className={style.title1} >Documento:</p>
                        <p className={style.user}>{User.document}</p>
                    </div>
                    <div className={style.data}>
                        <p className={style.title1} >Fecha de nacimiento:</p>
                        <p className={style.user}> {User.dateOfBirth}</p>
                    </div>
                    <div className={style.data}>
                        <p className={style.title1} >Telefono:</p>
                        <p className={style.user}>{User.telephone} </p>
                    </div>
                </div>
                <div className={style.ctnText}>
                    <div className={style.data}>
                        <p className={style.title1} >Direccion:</p>
                        <p className={style.user}> {User.direction}</p>
                    </div>
                    <div className={style.data}>
                        <p className={style.title1} >Piso:</p>
                        <p className={style.user}> {User.floor}</p>
                    </div>
                    <div className={style.data}>
                        <p className={style.title1} >Departamento:</p>
                        <p className={style.user}> {User.department}</p>
                    </div>
                    <div className={style.data}>
                        <p className={style.title1} >Estado/Provincia:</p>
                        <p className={style.user}>{User.location}</p>
                    </div>
                    <div className={style.data}>
                        <p className={style.title1} >Ciudad:</p>
                        <p className={style.user}>{User.city} </p>
                    </div>
                    <div className={style.data}>
                        <p className={style.title1} >Codigo Postal:</p>
                        <p className={style.user}>{User.postalCode} </p>
                    </div>
                </div>
            </div>
            <Modal show={show} size="lg" centered >
                <Modal.Body>
                    <form className={style.formu} >
                        <h1 class={style.titleModal}>Editar datos</h1>
                        <div className={style.ctnGrid}>
                            <div className={style.InputForm} >
                                <label className={style.text}>Nombre</label >
                                <input 
                                className={style.input} 
                                name="fristName" 
                                type="text" 
                                value={input.fristName} 
                                onChange={onChange} />
                            </div>
                            <div className={style.InputForm} >
                                <label className={style.text}>Apellido</label >
                                <input 
                                className={style.input} 
                                name="lastName" 
                                type="text" 
                                value={input.lastName} 
                                onChange={onChange} />
                            </div>
                            <div className={style.InputForm} >
                                <label className={style.text}>Foto</label >
                                <input 
                                className={style.input} 
                                name="image" 
                                type="text" 
                                value={input.image} 
                                onChange={onChange} />
                            </div>
                        </div>
                        <div className={style.ctnGrid}>
                            <div className={style.InputForm} >
                                <label className={style.text}>Documento</label >
                                <input 
                                className={style.input} 
                                name="document" 
                                type="text" 
                                value={input.document} 
                                onChange={onChange} />
                            </div>
                            <div className={style.InputForm} >
                                <label className={style.text}>Fecha de nacimiento</label >
                                <input 
                                className={style.input} 
                                name="dateOfBirth" 
                                type="text" 
                                value={input.dateOfBirth} 
                                onChange={onChange} />
                            </div>
                            <div className={style.InputForm} >
                                <label className={style.text}>Telefono</label >
                                <input 
                                className={style.input} 
                                name="telephone" 
                                type="text" 
                                value={input.telephone} 
                                onChange={onChange} />
                            </div>
                        </div>
                        <div className={style.ctnGrid}>
                            <div className={style.InputForm} >
                                <label className={style.text}>Estado/Provincia</label >
                                <input 
                                className={style.input} 
                                name="location" 
                                type="text" 
                                value={input.location} 
                                onChange={onChange} />
                            </div>
                            <div className={style.InputForm} >
                                <label className={style.text}>Ciudad</label >
                                <input 
                                className={style.input} 
                                name="city" 
                                type="text" 
                                value={input.city} 
                                onChange={onChange} />
                            </div>
                            <div className={style.InputForm} >
                                <label className={style.text}>Codigo postal</label >
                                <input 
                                className={style.input} 
                                name="postalCode" 
                                type="text" 
                                value={input.postalCode} 
                                onChange={onChange} />
                            </div>
                        </div>

                        <div className={style.ctnGrid}>
                            <div className={style.InputForm} >
                                <label className={style.text}>Direccion</label >
                                <input 
                                className={style.input} 
                                name="direction" 
                                type="text" 
                                value={input.direction} 
                                onChange={onChange} />
                            </div>
                            <div className={style.InputForm} >
                                <label className={style.text}>Piso</label >
                                <input 
                                className={style.input} 
                                name="floor" 
                                type="text" 
                                value={input.floor} 
                                onChange={onChange} />
                            </div>
                            <div className={style.InputForm} >
                                <label className={style.text}>Departamento</label >
                                <input 
                                className={style.input} 
                                name="department" 
                                type="text" 
                                value={input.department} 
                                onChange={onChange} />
                            </div>
                        </div>
                        <div className={style.ctnBtn}>
                            <button className={style.btn} onClick={handleSubmit} >Aceptar</button>
                            <button className={style.btn} onClick={handleClose} >Cancelar</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Dates;